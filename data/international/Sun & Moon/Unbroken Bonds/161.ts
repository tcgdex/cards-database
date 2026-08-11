import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Happiny",
		'fr-fr': "Ptiravi",
		'es-es': "Happiny",
		'it-it': "Happiny",
		'pt-br': "Happiny",
		'de-de': "Wonneira"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		440,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Playhouse Heal",
				'fr-fr': "Soins Maisonjouet",
				'es-es': "Curación Casita",
				'it-it': "Cura del Gioco",
				'pt-br': "Cura de Casinha",
				'de-de': "Spielhausheilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, heal 60 damage from 1 of your Pokémon. If you use this Ability, your turn ends.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 60 dégâts à l’un de vos Pokémon. Si vous utilisez ce talent, votre tour se termine.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, cura 60 puntos de daño a 1 de tus Pokémon. Si usas esta habilidad, tu turno termina.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cura uno dei tuoi Pokémon da 60 danni. Se usi questa abilità, il tuo turno finisce.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, cure 60 pontos de dano de 1 dos seus Pokémon. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Heile bei Kopf 60 Schadenspunkte bei 1 deiner Pokémon. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	description: {
		'en-us': "Usually it's a well-behaved Pokémon, but if you take its round rock away, it will cry and fuss and throw a big old tantrum.",
	},

	thirdParty: {
		cardmarket: 372449,
		tcgplayer: 189263
	}
}

export default card
