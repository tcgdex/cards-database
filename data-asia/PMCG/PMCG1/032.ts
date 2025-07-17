import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Blastoise",
         ja: "爆風",
         fr: "Blastoise",
         de: "Blastoise",
         es: "Explosión",
         it: "Blastoise",
         pt: "Blastoise",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [9],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Rain Dance",
            ja: "レインダンス",
            fr: "Danse de la pluie",
            de: "Regentanz",
            es: "Baile de lluvia",
            it: "Danza della pioggia",
            pt: "Dança da chuva",
          },
          effect: {
            en: "As often as you like during your turn, you may attach a Basic Water Energy card from your hand to 1 of your Water Pokmon. This Pokmon Power can't be used if this Pokmon is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に好きなように、手から基本的な水エネルギーカードを1匹の水ポクモンに添付することができます。このポクモンが眠っている、混乱し、麻痺している場合、このポクモンの力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour, vous pouvez fixer une carte d'énergie de l'eau de base de votre main à 1 de votre pokmon d'eau. Cette puissance Pokmon ne peut pas être utilisée si ce Pokmon est endormi, confus ou paralysé.",
            de: "So oft Sie während Ihres Kurses mögen, können Sie eine grundlegende Wasserergiekarte von Ihrer Hand an 1 Ihres Wasserpokmons anbringen. Diese Pokmon -Kraft kann nicht verwendet werden, wenn dieses Pokmon schläft, verwirrt oder gelähmt ist.",
            es: "Tan a menudo como desee durante su turno, puede conectar una tarjeta de energía de agua básica desde su mano a 1 de su Pokmon de agua. Este poder de Pokmon no se puede usar si este Pokmon está dormido, confundido o paralizado.",
            it: "Tutte le volte che vuoi durante il tuo turno, puoi collegare una scheda di energia idrica di base dalla tua mano a 1 dei pokmon dell'acqua. Questa potenza di Pokmon non può essere utilizzata se questo Pokmon è addormentato, confuso o paralizzato.",
            pt: "Sempre que quiser durante o seu turno, você pode anexar um cartão básico de energia da água da sua mão a 1 do seu Pokmon da água. Esse poder do Pokmon não pode ser usado se esse Pokmon estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Hydro Pump",
            ja: "ハイドロポンプ",
            fr: "Pompe hydroélectrique",
            de: "Hydropumpe",
            es: "Bomba hidroeléctrica",
            it: "Pompa idro",
            pt: "Bomba hidrelétrica",
          },
          effect: {
            en: "This attack does 10 more damage for each extra Water Energy attached to this Pokemon (in addition to this attack's cost). You can't add more than 20 damage in this way.",
            ja: "この攻撃は、このポケモンに付随する追加の水エネルギーごとに10個のダメージを与えます（この攻撃のコストに加えて）。この方法で20以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 10 dégâts supplémentaires pour chaque énergie d'eau supplémentaire attachée à ce pokemon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Dieser Angriff verursacht 10 weitere Schäden für jede zusätzliche Wasserergie, die an dieses Pokémon angebracht ist (zusätzlich zu den Kosten dieses Angriffs). Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Este ataque hace 10 daños más por cada energía de agua adicional unida a este Pokémon (además del costo de este ataque). No puede agregar más de 20 daños de esta manera.",
            it: "Questo attacco infligge altri 10 danni per ogni energia dell'acqua extra attaccata a questo Pokemon (oltre al costo di questo attacco). Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Este ataque causa mais 10 danos a cada energia hídrica extra ligada a este Pokémon (além do custo deste ataque). Você não pode adicionar mais de 20 danos dessa maneira.",
          },

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
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
