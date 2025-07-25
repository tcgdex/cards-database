import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Typhlosion",
         ja: "染色",
         fr: "Typhlosion",
         de: "Typhlosion",
         es: "Tiflosión",
         it: "Tiflosione",
         pt: "Typhlosion",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 110,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Burning Aura",
            ja: "燃えているオーラ",
            fr: "Aura brûlante",
            de: "Brennen Aura",
            es: "Aura ardiente",
            it: "Aura brucia",
            pt: "Aura queimando",
          },
          effect: {
            en: "As long as Typhlosion is your Active PokÃ©mon, put 1 damage counter on each Active PokÃ©mon (both yours and your opponent's) between turns.",
            ja: "Typhlosionがアクティブなポカモンである限り、ターンの合間にアクティブなPokã©Mon（あなたと相手の両方）に1つのダメージカウンターを置きます。",
            fr: "Tant que Typhlosion est votre poké actif, mettez 1 compteur de dégâts sur chaque poké actif (le vôtre et celui de votre adversaire) entre les virages.",
            de: "Setzen Sie zwischen den aktiven Kurven zwischen den aktiven Kurven 1 Schadensschalter auf jeden aktiven Poké Mon (sowohl Ihr als auch Ihr Gegner).",
            es: "Mientras Typhlosion sea su Poké Mon activo, coloque 1 contador de daño en cada Poké activo (tanto el tuyo como el de su oponente) entre turnos.",
            it: "Finché la tiflosione è il tuo poké attivo, metti 1 contatore di danni su ciascun poké attivo (sia il tuo che il tuo avversario) tra le curve.",
            pt: "Enquanto a Typhlosion for o seu Poké de Mon ativo, coloque 1 contador de danos em cada Poké Mon ativo (tanto o seu quanto o do seu oponente) entre as voltas.",
          },
      }],

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Flickering Flames",
            ja: "フリッカリングフレーム",
            fr: "Flammes scintillants",
            de: "Flackern Flammen",
            es: "Llamas parpadeantes",
            it: "Fiamme tremolanti",
            pt: "Chamas tremeluzentes",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 50 damage plus 10 more damage for each damage counter on Typhlosion.",
            ja: "50のダメージに加えて、Typhlosionの各ダメージカウンターでさらに10ダメージを与えます。",
            fr: "Fait 50 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur la typhlosion.",
            de: "Fügt 50 Schäden plus 10 weitere Schäden für jeden Schadenschalter bei Typhlosion.",
            es: "Hace 50 daños más 10 más de daño por cada contador de daños en la tiflosión.",
            it: "Fa 50 danni più 10 danni in più per ciascun contatore del danno sulla tiflosione.",
            pt: "Causa 50 danos mais 10 mais danos para cada contador de danos na tiflosão.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
