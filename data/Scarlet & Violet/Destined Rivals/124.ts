import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Muk",
		fr: "Grotadmorv de la Team Rocket",
		de: "Team Rockets Sleimok",
		it: "Muk del Team Rocket",
		es: "Muk del Team Rocket",
		pt: "Muk da Equipe Rocket",
		'es-mx': "Muk del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Gooped Up",
			fr: "Engluement",
			de: "Verklebt",
			it: "Invischiato",
			es: "Pringue",
			pt: "Melecado",
			'es-mx': "Viscosidad Total"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse."
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Hazardous Venom",
			fr: "Venin Nocif",
			de: "Bedrohliches Gift",
			it: "Veleno Pericoloso",
			es: "Veneno Nocivo",
			pt: "Veneno Periculoso",
			'es-mx': "Veneno Nocivo"
		},

		effect: {
			en: "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 100 Schadenspunkte zu.",
			it: "Questo attacco infligge 100 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 100 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival."
		},

		damage: "100×"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
