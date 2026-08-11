import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian",
		'de-de': "Zacian"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Battle Legion",
			'fr-fr': "Légion de Combat",
			'es-es': "Legión de Combate",
			'it-it': "Legione d'Assalto",
			'pt-br': "Legião de Batalha",
			'de-de': "Heerschar"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each of your Benched Pokémon. This attack's damage isn't affected by Weakness or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca. El daño de este ataque no se ve afectado por Debilidad o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina. I danni di questo attacco non sono influenzati dalla debolezza o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada Pokémon no seu Banco. O dano deste ataque não é afetado por Fraqueza ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 10 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: "20+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691813,
				tcgplayer: 478232
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691813,
				tcgplayer: 478232
			}
		},
	],
}

export default card
