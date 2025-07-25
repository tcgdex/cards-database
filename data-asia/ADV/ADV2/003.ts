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
            en: "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending PokÃ©mon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、ディフェンディングポカモンに取り付けられた1つのエネルギーカードを相手の手に返します。 Shiftryが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez retourner une pièce. Si les têtes, retournez 1 carte d'énergie attachée au Poké en défense à la main de votre adversaire. Cette puissance ne peut pas être utilisée si SHIFTRY est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, geben Sie 1 Energiemittel an die tweidige Poké Mon Mon an die Hand Ihres Gegners zurück. Diese Kraft kann nicht angewendet werden, wenn Shiftry von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede voltear una moneda. Si se dirige, devuelva 1 tarjeta de energía adjunta a la defensora de Poké a la mano de tu oponente. Esta potencia no se puede usar si el cambio de cambios se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi capovolgere una moneta. Se le teste, restituiscono 1 scheda energetica collegata al poké di difesa alla mano dell'avversario. Questa potenza non può essere utilizzata se Shiftry è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode virar uma moeda. Se as cabeças, retornem 1 cartão de energia conectado ao defesa do Poké -Mon à mão do seu oponente. Esse poder não pode ser usado se o Shiftry for afetado por uma condição especial.",
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
			stamp: ["1st edition"],
		},
	],
};
