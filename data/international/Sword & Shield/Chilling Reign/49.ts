import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [181],
	set: Set,

	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'es-es': "Ampharos",
		'it-it': "Ampharos",
		'pt-br': "Ampharos",
		'de-de': "Ampharos"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	attacks: [{
		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Searchlight Tail",
			'fr-fr': "Queue de Projecteur",
			'es-es': "Cola Reflectora",
			'it-it': "Codaluce",
			'pt-br': "Cauda de Farol",
			'de-de': "Suchlichtschweif"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. If you find any Energy cards there, this attack does 90 more damage.",
			'fr-fr': "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, este ataque hace 90 puntos de daño más.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, questo attacco infligge 90 danni in più.",
			'pt-br': "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567129,
				tcgplayer: 241706
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567129,
				tcgplayer: 241706
			}
		},
	],
}

export default card
