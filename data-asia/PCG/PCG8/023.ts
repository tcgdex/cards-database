import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Swampert ex",
         ja: "Swampert Ex",
         fr: "Swampert ex",
         de: "SWALLT EX",
         es: "Ex swampert",
         it: "Swampert ex",
         pt: "Swampert Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [260],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Energy Recycle",
            ja: "エネルギーリサイクル",
            fr: "Recyclage d'énergie",
            de: "Energierecycling",
            es: "Reciclaje de energía",
            it: "Riciclare energetico",
            pt: "Reciclagem de energia",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your discard pile for 3 Energy cards and attach them to your PokÃ©mon in any way you like. If you do, your turn ends. This power can't be used if Swampert ex is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）に（攻撃の前に）、廃棄パイルを3枚のエネルギーカードに検索し、好きなようにポカモンに取り付けることができます。もしそうなら、あなたの順番は終わります。 Swampert Exが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre tas de défausse pour 3 cartes d'énergie et les attacher à votre pokã © Mon de quelque manière que ce soit. Si vous le faites, votre tour se termine. Cette puissance ne peut pas être utilisée si Swampert Ex est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihren Ablagerungsstapel nach 3 Energiekarten durchsuchen und sie in irgendeiner Weise an Ihren Poké Mon anbringen. Wenn Sie dies tun, endet Sie an der Reihe. Diese Leistung kann nicht verwendet werden, wenn Swampert Ex von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su pila de descarte para 3 cartas de energía y adjuntarlas a su Poké Mon de la manera que desee. Si lo haces, tu turno termina. Esta potencia no se puede usar si Swampert EX se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nella pila di scarto per 3 carte energetiche e attaccarle al tuo poké mon in qualsiasi modo desideri. Se lo fai, il tuo turno finisce. Questa potenza non può essere utilizzata se Swampert Ex è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar sua pilha de descarte por 3 cartões de energia e anexá -los ao seu Poké Mon da maneira que quiser. Se o fizer, sua vez termina. Esse poder não pode ser usado se o Swampert EX for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Ultra Pump",
            ja: "ウルトラポンプ",
            fr: "Ultra pompe",
            de: "Ultra -Pumpe",
            es: "Bomba ultra",
            it: "Pompa ultra",
            pt: "Ultra Pump",
          },
          effect: {
            en: "You may discard 2 cards from your hand. If you do, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "手から2枚のカードを捨てることができます。そうした場合、この攻撃は60ダメージに20回のダメージを与え、対戦相手のベンチ付きポケモンの1人に20ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez jeter 2 cartes de votre main. Si vous le faites, cette attaque fait 60 dégâts plus 20 dégâts supplémentaires et fait 20 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können 2 Karten von Ihrer Hand wegwerfen. Wenn Sie dies tun, verursacht dieser Angriff 60 Schäden plus 20 weitere Schäden und 20 Schäden an einem der pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede descartar 2 cartas de tu mano. Si lo haces, este ataque hace 60 daños más 20 más de daño y hace 20 daños a 1 de los Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi scartare 2 carte dalla tua mano. Se lo fai, questo attacco infligge 60 danni più 20 danni in più e fa 20 danni a 1 dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode descartar 2 cartões da sua mão. Se o fizer, esse ataque causa 60 danos mais 20 danos e causam 20 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 3,

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
