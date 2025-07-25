import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Groudon ex",
         ja: "Groudon Ex",
         fr: "Groudon ex",
         de: "Groudon Ex",
         es: "Groudon Ex",
         it: "Groudon Ex",
         pt: "Groudon Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [383],
      hp: 100,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Mark of Antiquity",
            ja: "古代のマーク",
            fr: "Marque de l'antiquité",
            de: "Mark der Antike",
            es: "Marca de la antigüedad",
            it: "Marco dell'antichità",
            pt: "Marca da antiguidade",
          },
          effect: {
            en: "As long as Groudon ex is your Active PokÃ©mon, each player's Kyogre ex and Rayquaza ex can't attack.",
            ja: "Groudon Exがあなたのアクティブなポカモンである限り、各プレイヤーのKyogre ExとRayquaza Exは攻撃できません。",
            fr: "Tant que Groudon Ex est votre poké actif, Kyogre Ex et Rayquaza Ex ne peuvent pas attaquer Kyogre Ex et Rayquaza Ex ne peut pas attaquer.",
            de: "Solange Groudon Ex Ihr aktiver Poké Mon ist, können Kyogre Ex und Rayquaza Ex jedes Spielers nicht angreifen.",
            es: "Mientras Groudon Ex sea tu Poké Mon activo, el Kyogre Ex y Rayquaza Ex de cada jugador no pueden atacar.",
            it: "Finché Groudon Ex è il tuo Pokã © attivo, Kyogre Ex e Rayquaza Ex non possono attaccare.",
            pt: "Enquanto Groudon Ex for o seu Poké Mon ativo, o Kyogre Ex e o Rayquaza ex de cada jogador não pode atacar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rock Tumble",
            ja: "岩の転倒",
            fr: "Rochers",
            de: "Felswäsche",
            es: "Caída de roca",
            it: "Tumble di roccia",
            pt: "Rock Tumble",
          },
          effect: {
            en: "This attack's damage is not affected by Resistance.",
            ja: "この攻撃の損傷は、抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs wird nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano deste ataque não é afetado pela resistência.",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Crushing Mantle",
            ja: "マントルを粉砕します",
            fr: "Manteau écrasant",
            de: "Mantel zerquetschen",
            es: "Manto aplastante",
            it: "Mantle schiacciante",
            pt: "Manto esmagador",
          },
          effect: {
            en: "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded.",
            ja: "あなたはあなたが好きなだけ多くのエネルギーカードをあなたの手から捨てることができます。そうした場合、この攻撃は50のダメージと、廃棄した各エネルギーカードに対してさらに10ダメージを与えます。",
            fr: "Vous pouvez jeter de votre main autant de cartes d'énergie que vous le souhaitez. Si vous le faites, cette attaque fait 50 dégâts plus 10 dégâts supplémentaires pour chaque carte d'énergie que vous avez jetée.",
            de: "Sie können so viele Energiekarten wie Sie möchten. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 10 weitere Schäden für jede von Ihnen verworfene Energiekarte.",
            es: "Puede descartar de su mano tantas tarjetas de energía como desee. Si lo hace, este ataque hace 50 daños más 10 daños más por cada carta de energía que descartó.",
            it: "Puoi scartare dalla tua mano quante carte energetiche che desideri. Se lo fai, questo attacco infligge 50 danni più 10 danni in più per ogni carta energetica che hai scartato.",
            pt: "Você pode descartar sua mão quantos cartões de energia quiser. Se o fizer, esse ataque causa 50 danos mais 10 mais danos para cada cartão de energia que você descartou.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
