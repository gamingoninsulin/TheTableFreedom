var stations = [
  // Q-Music
  {
    name: "Qmusic NL Nederlandstalig",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_nederlandstalig.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL Live",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL Fouteuur",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_fouteuur.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL Nonstop",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_nonstop.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL Thema",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_thema.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL Top40",
    url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_top40.mp3",
    logo: "data/img/stations/qmusic.gif",
  },
  {
    name: "Qmusic NL 90S",
    url: "https://stream.qmusic.nl/90s-00s/mp3",
    logo: "data/img/stations/qmusic.gif",
  },

  // 100% NL
  {
    name: "100% NL",
    url: "https://stream.100p.nl/100pctnl.mp3",
    logo: "data/img/stations/100Pnl.gif",
  },
  {
    name: "100% NL Nederpop",
    url: "https://stream.100p.nl/web04_mp3",
    logo: "data/img/stations/100Pnl.gif",
  },
  {
    name: "100% NL Non-Stop",
    url: "https://stream.100p.nl/web02_mp3",
    logo: "data/img/stations/100Pnl.gif",
  },
  {
    name: "100% NL Puur",
    url: "https://stream.100p.nl/web06_mp3",
    logo: "data/img/stations/100Pnl.gif",
  },
  {
    name: "100% NL Songfestival",
    url: "https://stream.100p.nl/web05_mp3",
    logo: "data/img/stations/100Pnl.gif",
  },

  // Radio 538
  {
    name: "Radio 538",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3",
    logo: "data/img/stations/radio538.gif",
  },
  {
    name: "Radio 538 Dance Dept.",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR01.mp3",
    logo: "data/img/stations/radio538.gif",
  },
  {
    name: "Radio 538 Non-Stop",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09.mp3",
    logo: "data/img/stations/radio538.gif",
  },
  {
    name: "Radio 538 Party",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR16.mp3",
    logo: "data/img/stations/radio538.gif",
  },
  {
    name: "Radio 538 Die Verrückte",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR21.mp3",
    logo: "data/img/stations/radio538.gif",
  },
  {
    name: "Radio 538 Zomer",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR06.mp3",
    logo: "data/img/stations/radio538.gif",
  },

  // Radio 10
  {
    name: "Radio 10",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 60s & 70s Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR18.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 80s Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR20.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 90s Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR22.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 Lovesongs",
    url: "https://www.mp3streams.nl/zender/radio-10-lovesongs/stream/75-mp3-128",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 Disco Classics",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR23.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 Non-Stop",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR15.mp3",
    logo: "data/img/stations/radio10.gif",
  },
  {
    name: "Radio 10 Top 4000",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR24.mp3",
    logo: "data/img/stations/radio10.gif",
  },

  // Skyradio
  {
    name: "Skyradio",
    url: "https://www.mp3streams.nl/zender/skyradio/stream/8-mp3-128",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Non-Stop",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SKYRADIO.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Summer Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR28.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio LoveSongs",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR03.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Non-Stop@Work",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR24.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Smooth Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR15.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio 80s Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR04.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio 90s Hits",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR05.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Nice & Easy",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR07.mp3",
    logo: "data/img/stations/skyradio.gif",
  },
  {
    name: "Skyradio Christmas",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR08.mp3",
    logo: "data/img/stations/skyradio.gif",
  },

  // SlamFM
  {
    name: "SlamFM",
    url: "https://stream.slam.nl/slam_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM 40",
    url: "https://stream.slam.nl/web14_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Dance Classics",
    url: "https://stream.slam.nl/web15_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Hardstyle",
    url: "https://stream.slam.nl/web11_mp",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Housuh In De Pauzuh",
    url: "https://stream.slam.nl/web16_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Live",
    url: "https://stream.slam.nl/slam_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM MixMarathon",
    url: "https://stream.slam.nl/web13_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Non-Stop",
    url: "https://stream.slam.nl/web10_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Summer",
    url: "https://stream.slam.nl/web08_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM The Boom Room",
    url: "https://stream.slam.nl/web12_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  {
    name: "SlamFM Juize",
    url: "https://stream.slam.nl/web09_mp3",
    logo: "data/img/stations/slamfm.gif",
  },
  // hete hits
  {
    name: "Hete Hits",
    url: "https://mcp-2.mm-stream.nl:8000/stream",
    logo: "data/img/stations/wc/hetehits.gif",
  },
  // kids radio
  {
    name: "RadioNL Kids",
    url: "https://stream.radionlkids.nl/rnlkids",
    logo: "data/img/stations/radionl-kids.gif",
  },
  {
    name: "Efteling Kids",
    url: "http://ice.cr2.streamzilla.xlcdn.com:8000/sz=efteling=hdstream",
    logo: "data/img/stations/efteling.gif",
  },
];
