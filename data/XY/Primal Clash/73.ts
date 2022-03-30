import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Star",
				fr: "Étoile Synchro",
				es: "Estrella Sincronizada",
				it: "Sincrostella",
				pt: "Estrela Sincronizada",
				de: "Synchronstern"
			},
			effect: {
				en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 60 more damage.",
				fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies leur étant attachées, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon y el Pokémon Activo de tu rival tienen el mismo número de Energías unidas a ellos, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, esse ataque causará 60 de danos adicionais.",
				de: "Wenn an diesem Pokémon genauso viel Energie angelegt ist, wie am Aktiven Pokémon deines Gegners, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
