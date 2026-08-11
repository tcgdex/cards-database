import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		'en-us': "Hisuian Goodra",
		'fr-fr': "Muplodocus de Hisui",
		'es-es': "Goodra de Hisui",
		'it-it': "Goodra di Hisui",
		'pt-br': "Goodra de Hisui",
		'de-de': "Hisui Viscogon"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Hisuian Sliggoo",
		'fr-fr': "Colimucus de Hisui",
		'es-es': "Sliggoo de Hisui",
		'it-it': "Sliggoo di Hisui",
		'pt-br': "Sliggoo de Hisui",
		'de-de': "Hisui-Viscargot"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Metal Lodging",
			'fr-fr': "Abri Métal",
			'es-es': "Guarida Metálica",
			'it-it': "Alloggio Metallo",
			'pt-br': "Alojamento de Metal",
			'de-de': "Metallhaus"
		},

		effect: {
			'en-us': "Prevent all damage done to each of your Basic Pokémon that has any Metal Energy attached by attacks from your opponent's Pokémon V.",
			'fr-fr': "Évitez tous les dégâts infligés à chacun de vos Pokémon de base ayant de l'Énergie Metal attachée par les attaques des Pokémon-V de votre adversaire.",
			'es-es': "Evita todo el daño infligido por ataques de los Pokémon V de tu rival a cada uno de tus Pokémon Básicos que tenga alguna Energía Metal unida a él.",
			'it-it': "Previeni tutti i danni inflitti a ciascuno dei tuoi Pokémon Base che ha delle Energie Metal assegnate dagli attacchi dei Pokémon-V del tuo avversario.",
			'pt-br': "Previna todo o dano causado a cada um dos seus Pokémon Básicos que tiver alguma Energia Metal ligada a ele por ataques dos Pokémon V do seu oponente.",
			'de-de': "Verhindere allen Schaden durch Attacken von Pokémon-V deines Gegners, der jedem deiner Basis-Pokémon zugefügt wird, an das mindestens 1 Metal-Energie angelegt ist."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Able to freely control the hardness of its metallic shell. It loathes solitude and is extremely clingy— it will fume and run riot if those dearest to it ever leave its side.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691900,
				tcgplayer: 478039
			}
		},
	],
}

export default card
