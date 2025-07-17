import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Gyarados",
         ja: "ジョバンニのジャラドス",
         fr: "Gyarados de Giovanni",
         de: "Giovannis Gyarados",
         es: "Giovanni's Gyarados",
         it: "Giorados di Giovanni",
         pt: "Gyarados de Giovanni",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Summon Storm",
            ja: "嵐を召喚します",
            fr: "Invoquer la tempête",
            de: "Sturm beschwören",
            es: "Convocar tormenta",
            it: "Summon Storm",
            pt: "Invocar tempestade",
          },
          effect: {
            en: "Flip 2 coins. If both of them are heads, this attack does 20 damage to each other Pokemon (even your own). Don't apply Weakness and Resistance for this attack.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃はお互いのポケモン（あなた自身でさえ）に20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, cette attaque fait 20 dégâts à Pokémon (même le vôtre). N'appliquez pas la faiblesse et la résistance pour cette attaque.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, schadet dieser Angriff 20 Schäden vor Pokémon (sogar Ihren eigenen). Wenden Sie keine Schwäche und Widerstand für diesen Angriff an.",
            es: "Flip 2 monedas. Si ambos son cabezas, este ataque hace 20 daños entre sí Pokémon (incluso los tuyos). No aplique debilidad y resistencia para este ataque.",
            it: "Flip 2 monete. Se entrambi sono teste, questo attacco fa 20 danni l'uno all'altro Pokemon (anche il tuo). Non applicare debolezza e resistenza per questo attacco.",
            pt: "Flip 2 moedas. Se os dois são cabeças, esse ataque causará 20 danos um ao outro Pokémon (até o seu). Não aplique fraqueza e resistência a este ataque.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Dragon Tornado",
            ja: "ドラゴン・トルネード",
            fr: "Tornade de dragon",
            de: "Drachen Tornado",
            es: "Tornado de dragón",
            it: "Drago Tornado",
            pt: "Tornado de dragão",
          },
          effect: {
            en: "Unless this attack Knocks Out the Defending Pokemon, choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon.",
            ja: "この攻撃が防御ポケモンをノックアウトしない限り、対戦相手のベンチ付きポケモンを1つ選択し、防御ポケモンに切り替えます。",
            fr: "À moins que cette attaque élimine le Pokémon en défense, choisissez 1 des pokemon bancés de votre adversaire et changez-le avec le Pokémon en défense.",
            de: "Wenn dieser Angriff nicht das verteidigende Pokemon ausschlägt, wählen Sie 1 des Pokemon Ihres Gegners und wechseln Sie es mit dem verteidigenden Pokemon.",
            es: "A menos que este ataque noquee al Pokémon defensor, elija 1 de los Pokémon de banca de tu oponente y cambie con el Pokémon defensor.",
            it: "A meno che questo attacco non elimini il Pokemon in carica, scegli 1 del Pokemon in panchina del tuo avversario e cambialo con il Pokemon in carica.",
            pt: "A menos que esse ataque nocauteie o Pokémon atual, escolha 1 dos Pokémon com bancada do seu oponente e mude -o com o Pokémon atual.",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
