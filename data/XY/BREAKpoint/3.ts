import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Méganium",
		es: "Meganium",
		it: "Meganium",
		pt: "Meganium",
		de: "Meganie"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
		es: "Bayleef",
		it: "Bayleef",
		pt: "Bayleef",
		de: "Lorblatt"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Overgrow",
				fr: "Engrais",
				es: "Espesura",
				it: "Erbaiuto",
				pt: "Supercrescimento",
				de: "Notdünger"
			},
			effect: {
				en: "If this Pokémon's remaining HP is 50 or less, its attacks do 70 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "S'il reste 50 PV ou moins à ce Pokémon, ses attaques infligent 70 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Si a este Pokémon le quedan 50 PS o menos, sus ataques hacen 70 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Se i PS rimanenti di questo Pokémon diventano 50 o meno, i suoi attacchi infliggono 70 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Se este Pokémon tiver 50 PS restantes ou menos, seus ataques causarão 70 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Wenn dieses Pokémon 50 oder weniger verbliebene KP hat, fügen seine Angriffe dem Aktiven Pokémon deines Gegners 70 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				en: "Green Force",
				fr: "Force Verte",
				es: "Fuerza Verde",
				it: "Verdeforza",
				pt: "Força Verde",
				de: "Pflanzenkraft"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure este Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
