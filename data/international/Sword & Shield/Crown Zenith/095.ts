import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian V",
		'fr-fr': "Zacian V",
		'es-es': "Zacian V",
		'it-it': "Zacian V",
		'pt-br': "Zacian V",
		'de-de': "Zacian V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Piercing Strike",
			'fr-fr': "Coup Transperçant",
			'es-es': "Impacto Penetrante",
			'it-it': "Perforacolpo",
			'pt-br': "Golpe Perfurante",
			'de-de': "Durchbohrender Schlag"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Behemoth Blade",
			'fr-fr': "Gladius Maximus",
			'es-es': "Tajo Supremo",
			'it-it': "Taglio Maestoso",
			'pt-br': "Espada Colossal",
			'de-de': "Gigantenhieb"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 160 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 160 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 160 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 160 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "100+"
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691814,
				tcgplayer: 478233
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 864135
			}
		},
	],
}

export default card
