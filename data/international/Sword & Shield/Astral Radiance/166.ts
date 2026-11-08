import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		'en-us': "Starmie V",
		'fr-fr': "Staross V",
		'es-es': "Starmie V",
		'it-it': "Starmie V",
		'pt-br': "Starmie V",
		'de-de': "Starmie V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Swift",
			'fr-fr': "Météores",
			'es-es': "Rapidez",
			'it-it': "Comete",
			'pt-br': "Ataque Veloz",
			'de-de': "Sternschauer"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 50
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Energy Spiral",
			'fr-fr': "Spirale Énergie",
			'es-es': "Espiral de Energía",
			'it-it': "Spirale Energetica",
			'pt-br': "Espiral de Energia",
			'de-de': "Energiespirale"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658827,
				tcgplayer: 272418
			}
		},
	],
}

export default card
