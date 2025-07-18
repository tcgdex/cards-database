import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndoom",
         es: "Cebo",
         it: "Houndaom",
         pt: "Houndoom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Lonesome",
            ja: "寂しい",
            fr: "Solitaire",
            de: "Einsam",
            es: "Solitario",
            it: "Solitario",
            pt: "Solitário",
          },
          effect: {
            en: "As long as you have less PokÃ©mon in play than your opponent, your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand.",
            ja: "相手よりもPokã©Monが少ない限り、対戦相手は手からトレーナーカード（サポーターカードを除く）をプレイできません。",
            fr: "Tant que vous avez moins de poké en jeu que votre adversaire, votre adversaire ne peut jouer aucune cartes d'entraînement (à l'exception des cartes supporters) de sa main.",
            de: "Solange Sie weniger Poké Mon im Spiel haben als Ihr Gegner, können Ihr Gegner keine Trainerkarten (außer für Unterstützerkarten) von seiner Hand spielen.",
            es: "Mientras tengas menos Poké Mon en juego que tu oponente, tu oponente no puede jugar ninguna carta de entrenador (excepto las cartas de partidarios) de su mano.",
            it: "Finché hai meno Poké mon in gioco rispetto al tuo avversario, il tuo avversario non può giocare a nessuna carta di allenatore (tranne le carte di sostenitore) dalla sua mano.",
            pt: "Enquanto você tiver menos Poké Mon em jogo do que seu oponente, seu oponente não pode jogar nenhuma cartas de treinador (exceto as cartas de apoiadores) da mão.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tight Jaw",
            ja: "タイトな顎",
            fr: "Mâchoire serrée",
            de: "Enger Kiefer",
            es: "Mandíbula",
            it: "Mascella stretta",
            pt: "Mandíbula apertada",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard a Fire Energy attached to Houndoom.",
            ja: "猟犬に取り付けられた火エネルギーを捨てます。",
            fr: "Jeter une énergie de feu attachée au troupeau.",
            de: "Legen Sie eine Brandenergie ab, die an Houndoom gebunden ist.",
            es: "Deseche una energía de fuego unida al HOODOM.",
            it: "Scartare un'energia antincendio attaccata a Houndaom.",
            pt: "Descarte uma energia de incêndio ligada ao Houndoom.",
          },
          damage: 70,
        },
      ],

      retreat: 1,

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
