import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Zangoose",
         ja: "ZANGOOSE",
         fr: "Zangoose",
         de: "Zangoose",
         es: "Zangoose",
         it: "ZANGOOSE",
         pt: "Zangoose",
      },


      category: "Pokemon",
      dexId: [335],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Thick Skin",
            ja: "厚い肌",
            fr: "Peau épaisse",
            de: "Dicke Haut",
            es: "Piel gruesa",
            it: "Pelle spessa",
            pt: "Pele grossa",
          },
          effect: {
            en: "Zangoose can't be affected by any Special Conditions.",
            ja: "Zangooseは、特別な条件の影響を受けることはできません。",
            fr: "Le zangoose ne peut être affecté par des conditions spéciales.",
            de: "Zangoose kann nicht von besonderen Bedingungen betroffen sein.",
            es: "Zangoose no puede verse afectado por ninguna condición especial.",
            it: "Zangoose non può essere influenzato da alcuna condizione speciale.",
            pt: "Zangoose não pode ser afetado por nenhuma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for up to 2 Basic Pokemon and put them on your Bench. Shuffle your deck afterward.",
            ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 Pokémon de base et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Basic -Pokemon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 Pokémon básicos y póngalos en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo fino a 2 Pokemon di base e mettili in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 Pokémon básico e coloque -os em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sharp Claws",
            ja: "鋭い爪",
            fr: "Griffes pointues",
            de: "Scharfe Krallen",
            es: "Afilados",
            it: "Artigli affilati",
            pt: "Garras afiadas",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
