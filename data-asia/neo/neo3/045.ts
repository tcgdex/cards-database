import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton",
         ja: "マグネトン",
         fr: "Magnéton",
         de: "Magneton",
         es: "Magnetón",
         it: "Magneton",
         pt: "Magneton",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Electromagnetic Power",
            ja: "電磁電力",
            fr: "Puissance électromagnétique",
            de: "Elektromagnetische Leistung",
            es: "Potencia electromagnética",
            it: "Potenza elettromagnetica",
            pt: "Potência eletromagnética",
          },
          effect: {
            en: "As often as you like during your turn <em>(before your attack)</em>, you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.",
            ja: "ターン<em>（攻撃の前に）</em>中に好きなように、1つのマグネム人、マグネトン、または暗いマグネトンに1つのエネルギーカードを取り付けて、マグネムイト、マグネトン、または暗いマグネトンの別の1つの1つに取り付けることができます。マグネトンが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour <em> (avant votre attaque) </em>, vous pouvez prendre 1 carte d'énergie attachée à 1 de vos magnémites, magnétons ou magnétons sombres et le fixer à un autre 1 de vos magnémites, magnétons ou magnétons sombres. Ce pouvoir ne peut pas être utilisé si Magneton est endormi, confus ou paralysé.",
            de: "So oft Sie während Ihres Kurses <em> (vor Ihrem Angriff) </em> mögen, können Sie 1 Energiekarte an 1 Ihrer Magnemiten, Magnetonen oder dunklen Magnetonen nehmen und sie an einer anderen Ihrer Magnemiten, Magnetonen oder dunklen Magnetonen befestigen. Diese Kraft kann nicht verwendet werden, wenn Magneton schläft, verwirrt oder gelähmt ist.",
            es: "Tan a menudo como desee durante su turno <em> (antes de su ataque) </em>, puede tomar 1 tarjeta de energía unida a 1 de sus magnemitas, magnetones o magnetones oscuros y suponerla a un 1 de sus magnemitas, magnetones o magnetones oscuros. Este poder no se puede usar si Magneton está dormido, confundido o paralizado.",
            it: "Tutte le volte che vuoi durante il tuo turno <em> (prima del tuo attacco) </em>, puoi prendere 1 carta di energia attaccata a 1 dei tuoi magnemiti, magnetoni o magnetoni scuri e attaccarla a un diverso 1 dei tuoi magnemi, magneton o magneton scuri. Questa potenza non può essere usata se Magneton è addormentato, confuso o paralizzato.",
            pt: "Sempre que quiser durante o seu turno <em> (antes do seu ataque) </em>, você pode levar 1 cartão de energia conectado a 1 de seus magnemites, magnetons ou magnetons escuros e conectá -lo a um 1 de seus magnemites, magnetons ou magnetons escuros. Esse poder não pode ser usado se Magneton estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Plasma",
            ja: "プラズマ",
            fr: "Plasma",
            de: "Plasma",
            es: "Plasma",
            it: "Plasma",
            pt: "Plasma",
          },
          effect: {
            en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Magneton.",
            ja: "廃棄パイルに稲妻エネルギーカードがある場合は、それらの1つをマグネトンに取り付けます。",
            fr: "S'il y a des cartes d'énergie Lightning dans votre tas de défausse, attachez 1 d'entre elles à Magneton.",
            de: "Wenn Sie Lightning Energy -Karten in Ihrem Ablagerungsstapel enthalten, befestigen Sie 1 von ihnen an Magneton.",
            es: "Si hay tarjetas de energía de rayos en su pila de descarte, adjunte 1 de ellas a Magneton.",
            it: "Se ci sono carte di energia Lightning nella tua pila di scarto, attacca 1 a Magneton.",
            pt: "Se houver cartas de energia raios em sua pilha de descarte, anexe 1 deles a Magneton.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
