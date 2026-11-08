import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Sylveon V",
		'fr-fr': "Nymphali V",
		'es-es': "Sylveon V",
		'it-it': "Sylveon V",
		'pt-br': "Sylveon V",
		'de-de': "Feelinara V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "aky CG Works",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dream Gift",
			'fr-fr': "Cadeau Rêvé",
			'es-es': "Regalo de Ensueño",
			'it-it': "Dono Onirico",
			'pt-br': "Dream Gift",
			'de-de': "Traumgeschenk"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Objet, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Objeto, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Strumento, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Once during your turn, you may search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Itemkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Magical Shot",
			'de-de': "Magischer Schuss"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	dexId: [700],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574241,
				tcgplayer: 246698
			}
		},
	],
}

export default card
