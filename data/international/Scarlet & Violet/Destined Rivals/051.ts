import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'en-us': "Team Rocket's Articuno",
		'fr-fr': "Artikodin de la Team Rocket",
		'de-de': "Team Rockets Arktos",
		'it-it': "Articuno del Team Rocket",
		'es-es': "Articuno del Team Rocket",
		'pt-br': "Articuno da Equipe Rocket",
		'es-mx': "Articuno del Equipo Rocket"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Repelling Veil",
			'fr-fr': "Voile Repoussant",
			'de-de': "Abstoßender Schleier",
			'it-it': "Velo Respingente",
			'es-es': "Velo Repelente",
			'pt-br': "Véu Repelente",
			'es-mx': "Velo Repelente"
		},

		effect: {
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to your Basic Team Rocket's Pokémon. (Existing effects are not removed. Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets infligés à vos Pokémon de la Team Rocket de base provenant des attaques utilisées par les Pokémon de votre adversaire. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			'de-de': "Verhindere alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die deinen Basis-Team-Rockets-Pokémon zugefügt werden. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti ai tuoi Pokémon del Team Rocket Base. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a tus Pokémon del Team Rocket Básicos. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados aos seus Pokémon da Equipe Rocket Básicos. (Efeitos existentes não são removidos e dano não é um efeito.)",
			'es-mx': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival infligidos a tus Pokémon del Equipo Rocket Básicos. (Los efectos existentes no se eliminan. El daño no es un efecto)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Dark Frost",
			'fr-fr': "Givre Sombre",
			'de-de': "Dunkler Frost",
			'it-it': "Oscurogelo",
			'es-es': "Escarcha Oscura",
			'pt-br': "Geada Sombria",
			'es-mx': "Escarcha Oscura"
		},

		effect: {
			'en-us': "If this Pokémon has any Team Rocket's Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si au moins une Énergie de la Team Rocket est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Team Rockets Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha delle Energie del Team Rocket assegnate, questo attacco infligge 60 danni in più.",
			'es-es': "Si este Pokémon tiene alguna Energía del Team Rocket unida, este ataque hace 60 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver alguma Energia da Equipe Rocket ligada a ele, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene alguna Energía del Equipo Rocket unida, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825925,
				tcgplayer: 632864
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825925,
				tcgplayer: 632864
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 826177,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862170,
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871155,
			}
		},
	],
}

export default card
