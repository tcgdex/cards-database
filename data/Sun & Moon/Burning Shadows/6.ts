import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Disgusting Pollen",
				fr: "Pollen Dégoûtant",
				es: "Polen Asqueroso",
				it: "Ripugnapolline",
				pt: "Pólen Nojento",
				de: "Ekelhafter Pollen"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Basic Pokémon can’t attack.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los Pokémon Básicos de tu rival no pueden atacar.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i Pokémon Base del tuo avversario non possono attaccare.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, o Pokémon Básico do seu oponente não poderá atacar.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann das Basis-Pokémon deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Downer Shock",
				fr: "Choc Immobilisateur",
				es: "Impacto Calmante",
				it: "Shock Calmante",
				pt: "Choque Calmante",
				de: "Beruhigungsschock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If tails, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido. Se sair coroa, o Pokémon Ativo do seu oponente será Confundido.",
				de: "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299413,
		tcgplayer: 138276
	}
}

export default card
