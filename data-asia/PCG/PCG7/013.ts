import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Bellossom (Delta Species)",
         ja: "Bellossom（デルタ種）",
         fr: "Bellossom (espèces delta)",
         de: "Bellossom (Delta -Arten)",
         es: "Billassom (especie delta)",
         it: "Belssom (specie delta)",
         pt: "Bellossom (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [182],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Fellowship",
            ja: "フェローシップ",
            fr: "Camaraderie",
            de: "Gemeinschaft",
            es: "Compañerismo",
            it: "Amicizia",
            pt: "Comunhão",
          },
          effect: {
            en: "Bellossom can use the attacks of all Oddish, Gloom, Vileplume, Vileplume ex, or other Bellossom you have in play as its own. (You still need the necessary Energy to use each attack.)",
            ja: "Bellossomは、すべての奇妙な、暗がり、vileplume、vileplume ex、またはあなたがプレイしている他のBellossomの攻撃を独自のものとして使用できます。 （各攻撃を使用するために必要なエネルギーが必要です。）",
            fr: "Bellossom peut utiliser les attaques de tous les Odish, sombre, vileplume, vileplume ex ou autre Bellossom que vous avez en jeu comme le sien. (Vous avez toujours besoin de l'énergie nécessaire pour utiliser chaque attaque.)",
            de: "Bellossom kann die Angriffe aller Oddish, Dunkelheit, Vileplume, Vileplume Ex oder anderer Bellossom, das Sie im Spiel haben, als seine eigenen verwenden. (Sie benötigen immer noch die notwendige Energie, um jeden Angriff zu nutzen.)",
            es: "Blossom puede usar los ataques de todos los extraños, la penumbra, el villeplume, el vileplume ex u otro dedo que tienes en juego como propio. (Todavía necesita la energía necesaria para usar cada ataque).",
            it: "Bellossom può usare gli attacchi di tutti strani, oscuri, vileplume, vileplume ex o altri bellossom che hai in gioco come suo. (Hai ancora bisogno dell'energia necessaria per utilizzare ogni attacco.)",
            pt: "Bellossom pode usar os ataques de todas as estranhas, sombrias, vileplume, vileplume ex ou outro Bellossom que você tem em jogo como seu. (Você ainda precisa da energia necessária para usar cada ataque.)",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Aqua Flower",
            ja: "アクアフラワー",
            fr: "Fleur aqua",
            de: "Aqua -Blume",
            es: "Flor de agua",
            it: "Fiore di acqua",
            pt: "Flor Aqua",
          },
          effect: {
            en: "During your opponent's next turn, Bellossom has no Weakness.",
            ja: "対戦相手の次のターン中、Bellossomには弱点はありません。",
            fr: "Au cours du prochain tour de votre adversaire, Bellossom n'a aucune faiblesse.",
            de: "Während der nächsten Runde Ihres Gegners hat Bellossom keine Schwäche.",
            es: "Durante el próximo turno de tu oponente, Bolessom no tiene debilidad.",
            it: "Durante il prossimo turno del tuo avversario, Bellossom non ha debolezza.",
            pt: "Durante o próximo turno do seu oponente, Bellossom não tem fraqueza.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
