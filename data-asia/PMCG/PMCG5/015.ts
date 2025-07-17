import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Victreebel",
         ja: "エリカのヴィックツリーベル",
         fr: "Victreebel d'Erika",
         de: "Erikas Victreebel",
         es: "Victreebel de Erika",
         it: "Victreebel di Erika",
         pt: "Victreebel de Erika",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [71],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Fragrance Trap",
            ja: "フレグランストラップ",
            fr: "Piège à parfum",
            de: "Duftfalle",
            es: "Trampa de fragancia",
            it: "Trappola per fragranze",
            pt: "Armadilha de fragrâncias",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, and if your opponent has any Benched Pokmon, choose 1 of them and switch it with his or her Active Pokmon. This power can't be used if Erika's Victreebel is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、そして相手がPokmonをベンチしている場合は、それらの1つを選択し、アクティブなPokmonで切り替えます。 ErikaのVictreebelが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, et si votre adversaire a un pokmon banc, choisissez 1 d'entre eux et changez-le avec son pokmon actif. Ce pouvoir ne peut pas être utilisé si Victreebel d'Erika est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Köpfe und wenn Ihr Gegner Pokmon mit Bank hat, wählen Sie 1 davon und wechseln Sie es mit seinem aktiven Pokmon. Diese Kraft kann nicht verwendet werden, wenn Erikas Victreebel schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, y si tu oponente tiene algún pokmon de banca, elige 1 de ellos y cídalo con su Pokmon activo. Este poder no se puede usar si el victreebel de Erika está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, e se il tuo avversario ha qualche Pokmon in panchina, scegli 1 e cambialo con i suoi Pokmon attivi. Questo potere non può essere usato se Victreebel di Erika è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, e se o seu oponente tiver algum Pokmon em bancada, escolha 1 delas e mude -o com seu Pokmon ativo. Esse poder não pode ser usado se Victreebel de Erika estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Razor Leaf",
            ja: "かみそりの葉",
            fr: "Feuille de rasoir",
            de: "Rasiererblatt",
            es: "Hojas de afeitar",
            it: "Foglia di rasoio",
            pt: "Folha de barbear",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
