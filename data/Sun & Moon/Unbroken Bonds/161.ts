import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Happiny",
		fr: "Ptiravi",
		es: "Happiny",
		it: "Happiny",
		pt: "Happiny",
		de: "Wonneira"
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
				en: "Playhouse Heal",
				fr: "Soins Maisonjouet",
				es: "Curación Casita",
				it: "Cura del Gioco",
				pt: "Cura de Casinha",
				de: "Spielhausheilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 60 damage from 1 of your Pokémon. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 60 dégâts à l’un de vos Pokémon. Si vous utilisez ce talent, votre tour se termine.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, cura 60 puntos de daño a 1 de tus Pokémon. Si usas esta habilidad, tu turno termina.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cura uno dei tuoi Pokémon da 60 danni. Se usi questa abilità, il tuo turno finisce.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, cure 60 pontos de dano de 1 dos seus Pokémon. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Heile bei Kopf 60 Schadenspunkte bei 1 deiner Pokémon. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 372449,
		tcgplayer: 189263
	}
}

export default card
