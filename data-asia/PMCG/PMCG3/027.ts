import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Slowpoke",
         ja: "slowpoke",
         fr: "Lambin",
         de: "Langweiler",
         es: "Perezoso",
         it: "Slowpoke",
         pt: "Slowpoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [79],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spacing Out",
            ja: "間隔",
            fr: "Échelonnement",
            de: "Abstand",
            es: "Espaciado",
            it: "Spaziatura",
            pt: "Espaçando",
          },
          effect: {
            en: "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
            ja: "コインをひっくり返します。頭の場合は、slowpokeからダメージカウンターを取り外します。 SlowPokeにダメージカウンターがない場合、この攻撃は使用できません。",
            fr: "Retourner une pièce. Si les têtes, retirez un compteur de dégâts de SlowPoke. Cette attaque ne peut pas être utilisée si SlowPoke n'a pas de compteurs de dégâts dessus.",
            de: "Eine Münze drehen. Wenn Köpfe, entfernen Sie einen Schadenschalter von Slowpoke. Dieser Angriff kann nicht verwendet werden, wenn Slowpoke keine Schadenszähler hat.",
            es: "Voltea una moneda. Si se dirige, retire un mostrador de daños de SlowPoke. Este ataque no se puede usar si SlowPoke no tiene contadores de daño.",
            it: "Capovolgi una moneta. Se la testa, rimuovere un contatore di danni da Slowpoke. Questo attacco non può essere usato se Slowpoke non ha contatori di danni su di esso.",
            pt: "Vire uma moeda. Se as cabeças, remova um balcão de danos do Slowpoke. Esse ataque não pode ser usado se o SlowPoke não tiver contadores de danos.",
          },

        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Scavenge",
            ja: "清掃",
            fr: "Récupérer",
            de: "Schnurren",
            es: "Limpiar",
            it: "Scavenge",
            pt: "Limpeza",
          },
          effect: {
            en: "Discard 1 Psychic Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
            ja: "この攻撃を使用するために、SlowPokeに取り付けられた1つのサイキックエネルギーカードを捨てます。廃棄の山からトレーナーカードを手に入れてください。",
            fr: "Jetez 1 carte d'énergie psychique attachée à SlowPoke afin d'utiliser cette attaque. Mettez une carte d'entraînement de votre tas de défausse dans votre main.",
            de: "Verwerfen Sie 1 psychische Energiekarte, die an Slowpoke angebracht ist, um diesen Angriff zu verwenden. Legen Sie eine Trainerkarte von Ihrem Ablagerungshaufen in Ihre Hand.",
            es: "Descarte 1 Tarjeta de energía psíquica unida a SlowPoke para usar este ataque. Pon una tarjeta de entrenador de tu pila de descarte en tu mano.",
            it: "Scartare 1 carta di energia psichica collegata a Slowpoke per usare questo attacco. Metti in mano una carta dell'allenatore dalla tua pila di scarti.",
            pt: "Descarte 1 cartão de energia psíquica anexada ao SlowPoke para usar esse ataque. Coloque um cartão de treinador da sua pilha de descarte em sua mão.",
          },

        },
      ],

      retreat: 1,

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
