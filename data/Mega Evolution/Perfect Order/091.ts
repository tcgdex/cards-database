import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		de: "Fiaro",
		it: "Talonflame",
		pt: "Talonflame"
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [
		663
	],
	hp: 150,
	types: [
		"Fire"
	],
	stage: "Stage2",
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		de: "Dartignis",
		it: "Fletchinder",
		pt: "Fletchinder"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sky Hunt",
				fr: "Chasse Céleste",
				es: "Cacería Aérea",
				de: "Jäger der Lüfte",
				it: "Caccia Aerea",
				pt: "Rapina Aérea"
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Flip a coin. If heads, discard a random card from your opponent's hand.",
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
				es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
				de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
				it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire"
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu",
				es: "Ala Ígnea",
				de: "Feuerflügel",
				it: "Alafiamma",
				pt: "Asa de Fogo"
			},
			damage: "110"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "OKACHEKE",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684406,
		cardmarket: 877508
	}
}

export default card
