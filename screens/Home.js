import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ navigation }) => {

    const profileData = {
        name: 'Username',
        point: 200
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "The 3 Mistakes of My Life",
        bookCover: images.ThreeMistakesOfMyLife,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Chetan Bhagat",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "The 3 Mistakes of My Life traces the lives of three close friends, Govind, Omi and Ishan, in Gujarat. It chronicles the delightful and tragic tale of these young men as they embark on a journey to find success in their lives and careers. Govind has forever cherished a dream of setting up his own business, while Omi and Ishaan have always been relatively laid back in life. Together they start a cricket shop. Instead of focusing on the business, Ishaan aspires to mentor a gifted batsman, Ali. Omi, on the other hand, is not very opportunistic and ambitious and his only aim in life is to be there for his friends and support them in all their endeavors. However, nothing comes easy in life especially when you are stuck in a city which is caught up in chaos and turmoil. To realize their dreams, the boys have to face the worst of the circumstances - communal riots, massive earthquake, religious politics, and above all they have to bear the brunt of all their mistakes. Will the boys be able to come out triumphant from this messy situation? Three Mistakes of My Life was adapted into a movie called Kai Po Che! which was directed by Abhishek Kapoor.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "Five Point Someone",
        bookCover: images.FivePointSomeOne,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Chetan Bhagat",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "Five reasons why Hary, Ryan and Alok’s lives are a complete mess:1. They’ve messed up their grades big time.2. Alok and Ryan can’t stop bickering with each other.3. Hary is smitten with Neha, who happens to be his professor’s daughter.4. As students of IIT, they’re expected to conquer the world—something they know isn’t likely to happen.5. They only have each other.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "India Positive",
        bookCover: images.IndiaPositive,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Chetan Bhagat",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "Bhagat addresses a host of contemporary issues within India Positive, such as how young Indians’ employment prospects can be improved, the functionality of the country’s healthcare system, and ways in which India can deal with the challenges posed by the Internet and social media. He believes that party politics should take a backseat when the state of the nation is at stake and thus adopts an unbiased approach to the subjects that he considers. Although he analyses India’s failings, Bhagat’s message is one of optimism. He leaves the reader with the feeling that they could become what he terms an ‘India Positive Citizen’ and help the nation to become a truly progressive one.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Hello</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{profile.name}</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                {/* Claim */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Claim")}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={icons.claim_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Claim</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <LineDivider />

                {/* Get Point */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Get Point")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.point_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                    </View>
                </TouchableOpacity>

                {/* Divider */}
                <LineDivider />

                {/* My Card */}
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("My Card")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.card_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
    }

    function renderMyBookSection(myBooks) {

      const renderItem = ({ item, index }) => {
          return (
              <TouchableOpacity
                  style={{
                      flex: 1,
                      marginLeft: index == 0 ? SIZES.padding : 0,
                      marginRight: SIZES.radius
                  }}
                  onPress={() => navigation.navigate("BookDetail", {
                      book: item
                  })}
              >
                  {/* Book Cover */}
                  <Image
                      source={item.bookCover}
                      resizeMode="cover"
                      style={{
                          width: 180,
                          height: 250,
                          borderRadius: 20
                      }}
                  />

                  {/* Book Info */}
                  <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                          source={icons.clock_icon}
                          style={{
                              width: 20,
                              height: 20,
                              tintColor: COLORS.lightGray
                          }}
                      />
                      <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                      <Image
                          source={icons.page_icon}
                          style={{
                              marginLeft: SIZES.radius,
                              width: 20,
                              height: 20,
                              tintColor: COLORS.lightGray
                          }}
                      />
                      <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                  </View>
              </TouchableOpacity>
          )
      }

      return (
          <View style={{ flex: 1 }}>
              {/* Header */}
              <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

                  <TouchableOpacity
                      onPress={() => console.log("See More")}
                  >
                      <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                  </TouchableOpacity>
              </View>

              {/* Books */}
              <View style={{ flex: 1, marginTop: SIZES.padding }}>
                  <FlatList
                      data={myBooks}
                      renderItem={renderItem}
                      keyExtractor={item => `${item.id}`}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                  />
              </View>
          </View>
      )
  }

    function renderCategoryHeader() {
      const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, marginRight: SIZES.padding }}
                onPress={() => setSelectedCategory(item.id)}
            >
                {
                    selectedCategory == item.id &&
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                }
                {
                    selectedCategory != item.id &&
                    <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
            <FlatList
                data={categories}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
            />
        </View>
    )
       
    }

    function renderCategoryData() {
      var books = []

      let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

      if (selectedCategoryBooks.length > 0) {
          books = selectedCategoryBooks[0].books
      }

      const renderItem = ({ item }) => {
          return (
              <View style={{ marginVertical: SIZES.base }}>
                  <TouchableOpacity
                      style={{ flex: 1, flexDirection: 'row' }}
                      onPress={() => navigation.navigate("BookDetail", {
                          book: item
                      })}
                  >
                      {/* Book Cover */}
                      <Image
                          source={item.bookCover}
                          resizeMode="cover"
                          style={{ width: 100, height: 150, borderRadius: 10 }}
                      />

                      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                          {/* Book name and author */}
                          <View>
                              <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                              <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                          </View>

                          {/* Book Info */}
                          <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                              <Image
                                  source={icons.page_filled_icon}
                                  resizeMode="contain"
                                  style={{
                                      width: 20,
                                      height: 20,
                                      tintColor: COLORS.lightGray
                                  }}
                              />
                              <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                              <Image
                                  source={icons.read_icon}
                                  resizeMode="contain"
                                  style={{
                                      width: 20,
                                      height: 20,
                                      tintColor: COLORS.lightGray
                                  }}
                              />
                              <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                          </View>

                          {/* Genre */}
                          <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                              {
                                  item.genre.includes("Adventure") &&
                                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                      <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                  </View>
                              }
                              {
                                  item.genre.includes("Romance") &&
                                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                      <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                  </View>
                              }
                              {
                                  item.genre.includes("Drama") &&
                                  <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                      <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                  </View>
                              }
                          </View>
                      </View>
                  </TouchableOpacity>

                  {/* Bookmark Button */}
                  <TouchableOpacity
                      style={{ position: 'absolute', top: 5, right: 15 }}
                      onPress={() => console.log("Bookmark")}
                  >
                      <Image
                          source={icons.bookmark_icon}
                          resizeMode="contain"
                          style={{
                              width: 25,
                              height: 25,
                              tintColor: COLORS.lightGray
                          }}
                      />
                  </TouchableOpacity>
              </View>
          )
      }

      return (
          <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
              <FlatList
                  data={books}
                  renderItem={renderItem}
                  keyExtractor={item => `${item.id}`}
                  showsVerticalScrollIndicator={false}
              />
          </View>
      )
  }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;