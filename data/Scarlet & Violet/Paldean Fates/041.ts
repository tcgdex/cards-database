import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [955],
	set: Set,

	name: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
			es: "Rayo Psi",
			it: "Psico",
			pt: "Raio Psíquico",
			de: "Mentale Blockade"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751578,
				tcgplayer: 534187,
				cardtrader: 274225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751578,
				tcgplayer: 534187,
				cardtrader: 274225
			}
		},
	],

	illustrator: "kawayoo",

	description: {
		en: "Flittle's toes levitate about half an inch above the ground because of the psychic power emitted from the frills on the Pokémon's belly.",
	},

}

export default card
