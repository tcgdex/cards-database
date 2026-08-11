import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wind Charm",
				'fr-fr': "Amulette Éolienne",
				'es-es': "Campanillas al Viento",
				'it-it': "Vento Incanto",
				'pt-br': "Amuleto do Vento",
				'de-de': "Windtalisman"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon. (Existing effects are not removed.)",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon. (Les effets déjà en action ne sont pas retirés.)",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon. (No se eliminan los efectos ya existentes).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a ciascuno dei tuoi Pokémon. Gli effetti esistenti non vengono rimossi.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, todos os efeitos dos ataques do seu oponente serão previnidos, exceto danos, causados a cada um dos seus Pokémon. (Efeitos existentes não são removidos.)",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die jedem deiner Pokémon zugefügt werden. (Bestehende Effekte werden nicht entfernt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio Aurora",
				'de-de': "Aurorastrahl"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water.",
	},

	thirdParty: {
		cardmarket: 288205,
		tcgplayer: 111536
	}
}

export default card
