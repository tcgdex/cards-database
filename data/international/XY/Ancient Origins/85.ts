import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "M Sceptile EX",
		'fr-fr': "M-Jungko EX",
		'es-es': "M-Sceptile EX",
		'it-it': "M Sceptile EX",
		'pt-br': "M-Sceptile EX",
		'de-de': "M-Gewaldro EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 220,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sceptile-EX",
		'fr-fr': "Jungko-EX",
		'es-es': "Sceptile-EX",
		'it-it': "Sceptile-EX",
		'pt-br': "Sceptile-EX",
		'de-de': "Gewaldro-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Jagged Saber",
				'fr-fr': "Sabre Tranchant",
				'es-es': "Sable Mellado",
				'it-it': "Dentesciabola",
				'pt-br': "Sabre Dentado",
				'de-de': "Gezackter Säbel"
			},
			effect: {
				'en-us': "You may attach up to 2 Grass Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
				'fr-fr': "Vous pouvez attacher jusqu'à 2 cartes Énergie Grass de votre main à vos Pokémon de Banc, de la manière que vous voulez. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts au Pokémon choisi.",
				'es-es': "Puedes unir hasta 2 cartas de Energía Grass de tu mano a tus Pokémon en Banca de la manera que desees. Si has unido Energía a un Pokémon de esta manera, cura todos los puntos de daño a ese Pokémon.",
				'it-it': "Puoi assegnare a piacimento ai tuoi Pokémon in panchina fino a due carte Energia Grass dalla tua mano. Se assegni Energia a un Pokémon in questo modo, curane tutti i danni.",
				'pt-br': "Você pode ligar até 2 cards de Energia Grass da sua mão aos seus Pokémon no Banco do jeito que desejar. Se você ligou Energia a um Pokémon dessa forma, cure todos os danos daquele Pokémon.",
				'de-de': "Du kannst bis zu 2 Grass-Energiekarten von deiner Hand beliebig an die Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile allen Schaden bei jenem Pokémon."
			},
			damage: 100,

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			'fr-fr': "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			'es-es': "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			'it-it': "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			'de-de': "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	thirdParty: {
		cardmarket: 284266,
		tcgplayer: 101506
	}
}

export default card
