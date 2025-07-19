import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar",
         ja: "Omastar",
         fr: "Omastar",
         de: "Omastar",
         es: "OmaStar",
         it: "Omastar",
         pt: "OMASTAR",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [139],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Ancient Fang",
            ja: "古代の牙",
            fr: "Fang antique",
            de: "Antike Fang",
            es: "Colmillo antiguo",
            it: "Ancient Fang",
            pt: "Fang antigo",
          },
          effect: {
            en: "As long as you have Kabuto, Kabutops, or Kabutops ex in play, Omastar's attacks do 20 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "Kabuto、Kabutops、またはKabutopsがプレイしている限り、Omastarの攻撃は防御するPokã©Monに20回のダメージを与えます（脱力感と抵抗を適用する前に）。",
            fr: "Tant que vous avez du kabuto, des kabutops ou des kabutops ex en jeu, les attaques d'Omastar font 20 dommages supplémentaires aux Poké en défense (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange Sie Kabuto, Kabutops oder Kabutops EX im Spiel haben, verursachen Omastars Angriffe 20 weitere Schäden am verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras tengas Kabuto, Kabutops o Kabutops EX en juego, los ataques de Omasastar hacen 20 daños más al Poké Mon defensor (antes de aplicar debilidad y resistencia).",
            it: "Finché hai in gioco Kabuto, Kabutops o Kabutops, gli attacchi di Omastar fanno altri 20 danni al poké mon (prima di applicare debolezza e resistenza).",
            pt: "Enquanto você tiver Kabuto, Kabutops ou Kabutops ex em jogo, os ataques de Omastar causam mais 20 danos ao defesa do Poké Mon (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Hydro Splash",
            ja: "ハイドロスプラッシュ",
            fr: "Hydro Splash",
            de: "Hydro Splash",
            es: "Chapoteo hidráulico",
            it: "Hydro Splash",
            pt: "Splash Hydro",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
