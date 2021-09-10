import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		it: "Suicune",
		pt: "Suicune",
		de: "Suicune"
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
				en: "Wind Charm",
				fr: "Amulette Éolienne",
				es: "Campanillas al Viento",
				it: "Vento Incanto",
				pt: "Amuleto do Vento",
				de: "Windtalisman"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent’s attacks, except damage, done to each of your Pokémon. (Existing effects are not removed.)",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon. (Les effets déjà en action ne sont pas retirés.)",
				es: "Mientras este Pokémon sea tu Pokémon Activo, evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon. (No se eliminan los efectos ya existentes).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a ciascuno dei tuoi Pokémon. Gli effetti esistenti non vengono rimossi.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, todos os efeitos dos ataques do seu oponente serão previnidos, exceto danos, causados a cada um dos seus Pokémon. (Efeitos existentes não são removidos.)",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die jedem deiner Pokémon zugefügt werden. (Bestehende Effekte werden nicht entfernt.)"
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
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio Aurora",
				de: "Aurorastrahl"
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



}

export default card
