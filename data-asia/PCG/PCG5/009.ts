import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Cascoon",
         ja: "気まぐれ",
         fr: "Cascoon",
         de: "Cascoon",
         es: "Casco",
         it: "Cascoon",
         pt: "Cascon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [268],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Emerge",
            ja: "出現します",
            fr: "Émerger",
            de: "Auftauchen",
            es: "Surgir",
            it: "Emergere",
            pt: "Emerge",
          },
          effect: {
            en: "Once during your turn (before your attack), if Cascoon is your Active PokÃ©mon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、気まぐれがあなたのアクティブなポカモンである場合、コインをひっくり返すことができます。頭の場合は、デッキを検索して、気まぐれから進化するカードを探して、それを気まぐれにします。 （これは進化する気まぐれとしてカウントされます。）その後、デッキをシャッフルします。 Cascookが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Cascoon est votre poké actif, vous pouvez retourner une pièce. Si les têtes, recherchez votre deck une carte qui évolue de Cascoon et mettez-la sur Cascoon. (Cela compte comme Cascoon en évolution.) Tandez votre deck par la suite. Cette puissance ne peut pas être utilisée si Cascoon est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Cascoon Ihr aktiver Poké Mon Mon ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte, die sich von Cascoon entwickelt, und legen Sie sie auf Cascoon. (Dies gilt als sich entwickelnde Cascoon.) Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Cascoon von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Cascoon es su Poké Mon activo, puede voltear una moneda. Si se dirige, busque en su mazo una carta que evolucione desde Cascoon y póngala en Cascoon. (Esto cuenta como un casco en evolución.) Arrobable tu mazo después. Esta potencia no se puede usar si Cascoon se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Cascoon è il tuo poké attivo, puoi capovolgere una moneta. Se la testa, cerca nel tuo mazzo una carta che si evolve da Cascoon e mettila su Cascoon. (Questo conta come cascoon in evoluzione.) Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se Cascoon è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o cascoon for o seu Poké ativo, você poderá virar uma moeda. Se as cabeças, procure um cartão para um cartão que evolui de Cascoon e coloque -o no cascoon. (Isso conta como em evolução Cascoon.) Rasgue seu baralho depois. Esse poder não pode ser usado se o cascoon for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
