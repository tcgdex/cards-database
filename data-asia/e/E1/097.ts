import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Venusaur - 097/128",
         ja: "金星-097/128",
         fr: "Venusaur - 097/128",
         de: "Venusaur - 097/128",
         es: "Venusaur - 097/128",
         it: "Venusaur - 097/128",
         pt: "Venusaur - 097/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [3],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Harvest Bounty",
            ja: "収穫賞金",
            fr: "Bounty de récolte",
            de: "Erntezucht",
            es: "Recompensa de cosecha",
            it: "Raccolta",
            pt: "Recompensa da colheita",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you attach an Energy card to your Active Pokmon as part of your turn, you may attach an additional Energy card to that Pokmon at the same time. This power can't be used if Venusaur is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、ターンの一環としてアクティブなPokmonにエネルギーカードを添付すると、同時にそのポクモンに追加のエネルギーカードを添付することができます。金星が特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si vous attachez une carte d'énergie à votre pokmon actif dans le cadre de votre tour, vous pouvez attacher une carte d'énergie supplémentaire à ce Pokmon en même temps. Cette puissance ne peut pas être utilisée si Venusaur est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> als Teil Ihres Zuges eine Energiekarte an Ihrem aktiven Pokmon anbringen, können Sie gleichzeitig eine zusätzliche Energiekarte an diesem Pokmon anbringen. Diese Kraft kann nicht verwendet werden, wenn Venusaur von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si adjunta una tarjeta de energía a su Pokmon activo como parte de su turno, puede adjuntar una tarjeta de energía adicional a ese Pokmon al mismo tiempo. Esta potencia no se puede usar si Venusaur se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se si collega una scheda energetica al tuo Pokmon attivo come parte del tuo turno, è possibile collegare una scheda energetica aggiuntiva a quel Pokmon contemporaneamente. Questo potere non può essere utilizzato se Venusaur è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você anexar um cartão de energia ao seu Pokmon ativo como parte do seu turno, poderá anexar um cartão de energia adicional a esse Pokmon ao mesmo tempo. Esse poder não pode ser usado se o Venusaur for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
