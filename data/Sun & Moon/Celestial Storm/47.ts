import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floating Electrons",
				fr: "Électrons Flottants",
				es: "Electrones Flotantes",
				it: "Elettroni Fluttuanti",
				pt: "Elétrons Flutuantes",
				de: "Schwebende Elektronen"
			},
			effect: {
				en: "If this Pokémon has any Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				es: "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver alguma Energia ligada a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Shock",
				fr: "Éclair",
				es: "Impactrueno",
				it: "Tuonoshock",
				pt: "Trovoada de Choques",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361294,
		tcgplayer: 170864
	}
}

export default card
