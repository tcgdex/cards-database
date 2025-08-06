import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Sceptile EX",
		fr: "M-Jungko EX",
		es: "M-Sceptile EX",
		it: "M Sceptile EX",
		pt: "M-Sceptile EX",
		de: "M-Gewaldro EX"
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
		en: "Sceptile-EX",
		fr: "Jungko-EX",
		es: "Sceptile-EX",
		it: "Sceptile-EX",
		pt: "Sceptile-EX",
		de: "Gewaldro-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Jagged Saber",
				fr: "Sabre Tranchant",
				es: "Sable Mellado",
				it: "Dentesciabola",
				pt: "Sabre Dentado",
				de: "Gezackter Säbel"
			},
			effect: {
				en: "You may attach up to 2 Grass Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
				fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie Grass de votre main à vos Pokémon de Banc, de la manière que vous voulez. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts au Pokémon choisi.",
				es: "Puedes unir hasta 2 cartas de Energía Grass de tu mano a tus Pokémon en Banca de la manera que desees. Si has unido Energía a un Pokémon de esta manera, cura todos los puntos de daño a ese Pokémon.",
				it: "Puoi assegnare a piacimento ai tuoi Pokémon in panchina fino a due carte Energia Grass dalla tua mano. Se assegni Energia a un Pokémon in questo modo, curane tutti i danni.",
				pt: "Você pode ligar até 2 cards de Energia Grass da sua mão aos seus Pokémon no Banco do jeito que desejar. Se você ligou Energia a um Pokémon dessa forma, cure todos os danos daquele Pokémon.",
				de: "Du kannst bis zu 2 Grass-Energiekarten von deiner Hand beliebig an die Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile allen Schaden bei jenem Pokémon."
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
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "{title}: Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
			de: "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
		}
	}],

	thirdParty: {
		tcgplayer: 101506
	}
}

export default card
