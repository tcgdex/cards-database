import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Vileplume (Delta Species)",
         ja: "vileplume（デルタ種）",
         fr: "Vileplume (espèces delta)",
         de: "Vileplume (Delta -Arten)",
         es: "Vileplume (especie delta)",
         it: "Vileplume (Delta Species)",
         pt: "Vileplume (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 90,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Poison Pollen",
            ja: "毒花粉",
            fr: "Pollen d'empoisonnement",
            de: "Giftpollen",
            es: "Polen de veneno",
            it: "Polline veleno",
            pt: "Pólen de veneno",
          },
          effect: {
            en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending PokÃ©mon. That PokÃ©mon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、防御するpokã©monの1つを選択します。そのポカモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez retourner une pièce. Si les têtes, choisissez 1 des Poké en défense. Ce pokã © Mon est maintenant empoisonné. Cette puissance ne peut pas être utilisée si le vileplume est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, wählen Sie 1 der verteidigenden Poké Mon Mon. Dieser Poké Mon ist jetzt vergiftet. Diese Leistung kann nicht verwendet werden, wenn Vileplume von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede voltear una moneda. Si se dirige, elija 1 del Poké defensor de Mon. Ese Poké Mon ahora está envenenado. Esta potencia no se puede usar si Vileplume se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi capovolgere una moneta. Se teste, scegli 1 del difensore Pokã © mon. Quel poké mon è ora avvelenato. Questa potenza non può essere utilizzata se Vileplume è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode virar uma moeda. Se as cabeças, escolha 1 do defesa de Poké. Esse poké é agora está envenenado. Esse poder não pode ser usado se o vileplume for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Metal"],
          name: {
            en: "Poltergeist",
            ja: "ポルターガイスト",
            fr: "Esprit frappeur",
            de: "Poltergeist",
            es: "Duende",
            it: "Poltergeist",
            pt: "Poltergeist",
          },
          effect: {
            en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer card in your opponent's hand.",
            ja: "相手の手を見てください。この攻撃は、30のダメージと、対戦相手の手の各トレーナーカードに対してさらに10ダメージを与えます。",
            fr: "Regardez la main de votre adversaire. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque carte d'entraînement dans la main de votre adversaire.",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jede Trainerkarte in der Hand Ihres Gegners.",
            es: "Mira la mano de tu oponente. Este ataque hace 30 daños más 10 daños más para cada carta de entrenador en la mano de tu oponente.",
            it: "Guarda la mano del tuo avversario. Questo attacco infligge 30 danni più 10 danni in più per ogni carta dell'allenatore nella mano dell'avversario.",
            pt: "Olhe para a mão do seu oponente. Este ataque causa 30 danos mais 10 mais danos para cada cartão de treinador na mão do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
