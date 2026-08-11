import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		'en-us': "Team Rocket's Muk",
		'fr-fr': "Grotadmorv de la Team Rocket",
		'de-de': "Team Rockets Sleimok",
		'it-it': "Muk del Team Rocket",
		'es-es': "Muk del Team Rocket",
		'pt-br': "Muk da Equipe Rocket",
		'es-mx': "Muk del Equipo Rocket"
	},


	illustrator: "Uta",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Team Rocket's Grimer",
		'fr-fr': "Tadmorv de la Team Rocket",
		'de-de': "Team Rockets Sleima",
		'it-it': "Grimer del Team Rocket",
		'es-es': "Grimer del Team Rocket",
		'pt-br': "Grimer da Equipe Rocket",
		'es-mx': "Grimer del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Gooped Up",
			'fr-fr': "Engluement",
			'de-de': "Verklebt",
			'it-it': "Invischiato",
			'es-es': "Pringue",
			'pt-br': "Melecado",
			'es-mx': "Viscosidad Total"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse."
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Hazardous Venom",
			'fr-fr': "Venin Nocif",
			'de-de': "Bedrohliches Gift",
			'it-it': "Veleno Pericoloso",
			'es-es': "Veneno Nocivo",
			'pt-br': "Veneno Periculoso",
			'es-mx': "Veneno Nocivo"
		},

		effect: {
			'en-us': "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 100 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 100 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 100 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825998,
				tcgplayer: 632932
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825998,
				tcgplayer: 632932
			}
		},
	],
}

export default card
