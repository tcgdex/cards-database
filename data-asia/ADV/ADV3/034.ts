import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Golem",
         ja: "ゴーレム",
         fr: "Golem",
         de: "Golem",
         es: "Golem",
         it: "GOLEM",
         pt: "Golem",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Rock Vengeance",
            ja: "岩の復ge",
            fr: "Vengeance rocheuse",
            de: "Rock Rache",
            es: "Venganza de roca",
            it: "Vendetta rocciosa",
            pt: "Vingança de rocha",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each damage counter on all of your Active Pokemon.",
            ja: "すべてのアクティブポケモンで、20のダメージと各ダメージカウンターの10件のダメージがさらに10件のダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur tous vos Pokémon actifs.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter bei all Ihrem aktiven Pokémon.",
            es: "Hace 20 daños más 10 10 más de daño por cada contador de daños en todos sus Pokémon activos.",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore di danni su tutti i Pokemon attivi.",
            pt: "Causam 20 danos mais 10 mais danos para cada contador de danos em todos os seus Pokémon ativos.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rock Slide",
            ja: "ロックスライド",
            fr: "Glissement",
            de: "Felsrutsche",
            es: "Tobogán de roca",
            it: "Slide di roccia",
            pt: "Slide de rocha",
          },
          effect: {
            en: "Does 20 damage to 2 of your opponent's Benched Pokemon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの2つに20ダメージを与えます（1つしかない場合は1）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dégâts à 2 des Pokémon bancés de votre adversaire (1 s'il n'y en a que 1). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 von 2 des Pokémon Ihres Gegners (1, wenn es nur 1 gibt). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a 2 de los pokemon de banca de tu oponente (1 si solo hay 1). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a 2 del Pokemon in panchina del tuo avversario (1 se c'è solo 1). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "20 danos a 2 do Pokémon em banco do seu oponente (1 se houver apenas 1). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 60,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
