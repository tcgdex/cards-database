import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Shiftry",
         ja: "シフトリー",
         fr: "Décalage",
         de: "Shiftry",
         es: "Cambio",
         it: "SHIFTRY",
         pt: "Shiftry",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 120,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Fan Away",
            ja: "ファンアウェイ",
            fr: "Éloigner",
            de: "Fan weg",
            es: "Avivarse",
            it: "Fan Away",
            pt: "Fan Away",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、ディフェンディングポケモンに取り付けられた1つのエネルギーカードを相手の手に返します。 Shiftryが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, retournez 1 carte d'énergie attachée au Pokémon en défense à la main de votre adversaire. Cette puissance ne peut pas être utilisée si SHIFTRY est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, geben Sie 1 Energiemessel an das verteidigende Pokémon an die Hand Ihres Gegners zurück. Diese Kraft kann nicht angewendet werden, wenn Shiftry von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, devuelva 1 tarjeta de energía unida al Pokémon defensor a la mano de tu oponente. Esta potencia no se puede usar si el cambio de cambios se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, restituiscono 1 carta di energia collegata al Pokémon in difesa sulla mano del tuo avversario. Questa potenza non può essere utilizzata se Shiftry è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, retorne 1 cartão de energia conectado ao Pokémon atual à mão do seu oponente. Esse poder não pode ser usado se o Shiftry for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Light Touch Throw",
            ja: "ライトタッチスロー",
            fr: "Light Touch Throw",
            de: "Leichter Touchwurf",
            es: "Touch ligero",
            it: "Light Touch Throw",
            pt: "Touch Light Touch",
          },
          effect: {
            en: "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokemon.",
            ja: "防御ポケモンに付着した各エネルギーに対して、80のダメージを引いた10のダメージをマイナス10ダメージします。",
            fr: "Fait 80 dégâts moins 10 dégâts pour chaque énergie attachée au Pokémon en défense.",
            de: "Schaden Sie 80 Schaden für jede Energie, die an das verteidigende Pokémon angeschlossen ist.",
            es: "Da da 80 daños menos 10 daños por cada energía unida a los Pokémon defensores.",
            it: "Fa 80 danni meno 10 danni per ogni energia attaccata al Pokemon in difesa.",
            pt: "80 danos menos 10 danos para cada energia ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
