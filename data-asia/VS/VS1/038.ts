import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Donphan",
         ja: "チャックのドンファン",
         fr: "Chuck's Donphan",
         de: "Chucks Donphan",
         es: "Donphan de Chuck",
         it: "Chuck's Donphan",
         pt: "Donphan de Chuck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [232],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fury Attack",
            ja: "怒り攻撃",
            fr: "Attaque de fureur",
            de: "Wutangriff",
            es: "Ataque de furia",
            it: "Attacco di furia",
            pt: "Ataque de fúria",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Overrun",
            ja: "オーバーラン",
            fr: "Envahi",
            de: "Überrannt",
            es: "Invadir",
            it: "Invaso",
            pt: "Overnun",
          },
          effect: {
            en: "Flip a coin. If heads, and if your opponent has any Benched Pokemon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。ヘッド、そして相手がベンチ付きポケモンを持っている場合、そのうち1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, et si votre adversaire a un pokemon bancaire, choisissez 1 d'entre eux et cette attaque lui fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe und wenn Ihr Gegner ein Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, y si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa e se il tuo avversario ha dei Pokemon in panchina, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, e se o seu oponente tiver algum Pokémon em banco, escolha 1 delas e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
        },
      ],

      retreat: 2,

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
