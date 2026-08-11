import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'pt-br': "Mawile",
		'de-de': "Flunkifer"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Powerful Vise",
			'fr-fr': "Étau Costaud",
			'es-es': "Agarre Poderoso",
			'it-it': "Morsa Portentosa",
			'pt-br': "Compressão Potente",
			'de-de': "Kraftklammer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20,
		cost: ["Metal"]
	}, {
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
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545581,
				tcgplayer: 234186
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545581,
				tcgplayer: 234186
			}
		},
	],
}

export default card
