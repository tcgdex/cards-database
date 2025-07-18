import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Roselia",
         ja: "ローゼリア",
         fr: "Roselia",
         de: "Rosselia",
         es: "Roselia",
         it: "Roselia",
         pt: "Roselia",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [315],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

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
            en: "Roselia can't be affected by any Special Conditions.",
            ja: "ロゼリアは、特別な条件の影響を受けることはできません。",
            fr: "Roselia ne peut être affectée par aucune condition spéciale.",
            de: "Roselia kann nicht von besonderen Bedingungen betroffen sein.",
            es: "Roselia no puede verse afectada por ninguna condición especial.",
            it: "Roselia non può essere influenzata da alcuna condizioni speciali.",
            pt: "Roselia não pode ser afetada por nenhuma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Speed Growth",
            ja: "速度の成長",
            fr: "Croissance de vitesse",
            de: "Geschwindigkeitswachstum",
            es: "Crecimiento de la velocidad",
            it: "Crescita della velocità",
            pt: "Crescimento de velocidade",
          },
          effect: {
            en: "Attach up to 2 Grass Energy cards from your hand to your Pokemon in any way you like.",
            ja: "あなたが好きな方法で、あなたの手からあなたの手からあなたの手から最大2つの草のエネルギーカードを取り付けます。",
            fr: "Fixez jusqu'à 2 cartes d'énergie de l'herbe de votre main à votre Pokémon de quelque manière que ce soit.",
            de: "Befestigen Sie bis zu 2 Grasergiekarten von Ihrer Hand an Ihr Pokémon, so wie Sie möchten.",
            es: "Adjunte hasta 2 tarjetas de energía de hierba de su mano a su Pokémon de la manera que desee.",
            it: "Attacca fino a 2 carte di energia dell'erba dalla tua mano al tuo Pokemon in ogni modo che desideri.",
            pt: "Anexe até 2 cartões de energia de grama da sua mão ao seu Pokémon da maneira que desejar.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Powder",
            ja: "スリープパウダー",
            fr: "Poudre de sommeil",
            de: "Schlafpulver",
            es: "Polvo de sueño",
            it: "Polvere di sonno",
            pt: "Sono Powder",
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
          damage: 10,
        },
      ],

      retreat: 1,

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
