import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Togetic - 061/092",
         ja: "togetic -061/092",
         fr: "Togetic - 061/092",
         de: "Togetic - 061/092",
         es: "Togetic - 061/092",
         it: "TEGETIC - 061/092",
         pt: "TOGETIC - 061/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [176],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Miracle Shift",
            ja: "奇跡のシフト",
            fr: "Changement de miracle",
            de: "Wunderverschiebung",
            es: "Cambio de milagro",
            it: "Miracle Shift",
            pt: "Mudança milagrosa",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, discard a basic Energy card attached to 1 of your Pokmon. Then, choose a basic Energy card from your discard pile and attach it to that Pokmon. This power can't be used if Togetic is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、1枚のポクモンに取り付けられた基本的なエネルギーカードを捨てます。次に、廃棄パイルから基本的なエネルギーカードを選択し、そのPokmonに取り付けます。 ToGeticが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, jetez une carte d'énergie de base attachée à 1 de votre pokmon. Ensuite, choisissez une carte d'énergie de base dans votre tas de défausse et attachez-la à ce pokmon. Cette puissance ne peut pas être utilisée si Togetic est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em> eine grundlegende Energiekarte an 1 Ihres Pokmons verwerfen. Wählen Sie dann eine grundlegende Energiekarte aus Ihrem Ablagerungsstapel aus und befestigen Sie sie an diesem Pokmon. Diese Leistung kann nicht verwendet werden, wenn Togetic von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, deseche una tarjeta de energía básica unida a 1 de su Pokmon. Luego, elija una tarjeta de energía básica de su pila de descarte y colóquela a ese Pokmon. Esta potencia no se puede usar si ToGetic se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, scartare una carta di energia di base collegata a 1 del tuo Pokmon. Quindi, scegli una scheda energetica di base dalla pila di scarto e attaccalo a quel Pokmon. Questa potenza non può essere utilizzata se TEGETIC è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, descarte um cartão de energia básico conectado a 1 do seu Pokmon. Em seguida, escolha um cartão de energia básico da sua pilha de descarte e anexe -a a esse Pokmon. Esse poder não pode ser usado se o TOGET for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mini-Metronome",
            ja: "ミニメトロノーム",
            fr: "Mini-métronome",
            de: "Mini-Metronom",
            es: "Mini-metrónomo",
            it: "Mini-metronomo",
            pt: "Mini-metronomo",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of the Defending Pokemon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokemon is, Togetic is still Colorless).  Togetic performs that attack.",
            ja: "コインをひっくり返します。頭の場合は、防御するポケモンの攻撃の1つを選択します。ミニメトロノームは、エネルギーコストを除いて攻撃するコピーをコピーします。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）（防御ポケモンがどんなタイプであっても、Togeticはまだ無色です）。  togeticはその攻撃を実行します。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 des attaques de Pokémon en défense. Les copies mini-métronome qui attaquent, à l'exception de son coût énergétique. (Vous devez toujours faire tout ce qui est requis pour utiliser cette attaque.) (Quel que soit le type que le Pokémon en défense est, Togetic est toujours incolore).  Togetic effectue cette attaque.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 der Angriffe des Verteidigungspokemons. Mini-Metronom-Kopien, die mit Ausnahme der Energiekosten angreifen. (Sie müssen noch alles tun, was erforderlich ist, um diesen Angriff zu verwenden.) (Unabhängig davon, in welchem Typ das verteidigende Pokemon ist, ist Togetic immer noch farblos).  Togetic führt diesen Angriff aus.",
            es: "Voltea una moneda. Si se dirige, elija 1 de los ataques del Pokémon defensores. Copias de mini-metrónomo que atacan, excepto por su costo de energía. (Aún debe hacer cualquier otra cosa que se requiera para usar ese ataque). (No importa qué tipo sea el Pokémon defensor, la Togica todavía es incolora).  Togetic realiza ese ataque.",
            it: "Capovolgi una moneta. Se la testa, scegli 1 degli attacchi di Pokemon in carica. Mini-Metronome copie che attaccano ad eccezione del suo costo energetico. (Devi ancora fare qualsiasi altra cosa richiesta per usare quell'attacco.) (Indipendentemente dal tipo di Pokemon in difesa, tagic è ancora incolore).  Togetic esegue quell'attacco.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 dos ataques de Pokemon em defesa. Mini-metronomo cópias que atacam, exceto por seu custo de energia. (Você ainda deve fazer qualquer outra coisa necessária para usar esse ataque.) (Não importa que tipo seja o Pokemon defensor, o ToGetic ainda é incolor).  TOGETIC realiza esse ataque.",
          },
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
