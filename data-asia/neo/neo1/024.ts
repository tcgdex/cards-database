import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Totodile",
         ja: "totodile",
         fr: "Totodile",
         de: "Totodil",
         es: "Totodile",
         it: "Totodile",
         pt: "Totodile",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [158],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Leer",
            ja: "Leer",
            fr: "Lorgner",
            de: "Leer",
            es: "Mirada lasciva",
            it: "Leer",
            pt: "Leer",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't attack Totodile during your opponent's next turn. (Benching or evolving either Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは対戦相手の次のターン中にトトダイルを攻撃することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer Totodile pendant le prochain tour de votre adversaire. (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Eine Münze drehen. Wenn das verteidigende Pokemon Totodile während der nächsten Runde Ihres Gegners nicht angreifen kann. (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar a Totodile durante el próximo turno de tu oponente. (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in carica non può attaccare Totodile durante il prossimo turno del tuo avversario. (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon atual não pode atacar Totodile durante o próximo turno do seu oponente. (Bancho ou evolução de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
