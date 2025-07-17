import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Misdreavus",
         ja: "ミスレアヴァス",
         fr: "Malseaux",
         de: "Miseravus",
         es: "Desgracia",
         it: "Misreavus",
         pt: "MISDRAVUS",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [200],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hypnoblast",
            ja: "催眠芽球",
            fr: "Hypnoblaste",
            de: "Hypnoblast",
            es: "Hipnoblasto",
            it: "Ipnoblasto",
            pt: "Hipnoblasto",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Gift of Spite",
            ja: "にきびの贈り物",
            fr: "Cadeau de dépit",
            de: "Geschenk des Trotzes",
            es: "Regalo de rencor",
            it: "Dono di dispetto",
            pt: "Presente de despeito",
          },
          effect: {
            en: "Count the number of your Pokemon in play with damage counters on them. Put that many damage counters on the Defending Pokemon.",
            ja: "プレイ中のポケモンの数をダメージカウンターで数えます。その多くのダメージカウンターを防御ポケモンに置きます。",
            fr: "Comptez le nombre de votre pokemon en jeu avec des compteurs de dégâts sur eux. Mettez autant de compteurs de dégâts sur le Pokémon en défense.",
            de: "Zählen Sie die Anzahl Ihres Pokémon im Spiel mit Schadenszähnen. Setzen Sie so viele Schadenszähler auf das verteidigende Pokémon.",
            es: "Cuente el número de su Pokémon en juego con mostradores de daños. Ponga tantos contadores de daño en el Pokémon defensor.",
            it: "Conta il numero del tuo Pokemon in gioco con contatori di danni su di loro. Metti molti contatori di danno sul Pokemon in carica.",
            pt: "Conte o número de seu Pokémon em jogo com contadores de danos neles. Coloque tantos contadores de danos no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
