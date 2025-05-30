import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Articuno",
		fr: "Artikodin de la Team Rocket",
		de: "Team Rockets Arktos",
		it: "Articuno del Team Rocket",
		es: "Articuno del Team Rocket",
		pt: "Articuno da Equipe Rocket"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Repelling Veil",
			fr: "Voile Repoussant",
			de: "Abstoßender Schleier",
			it: "Velo Respingente",
			es: "Velo Repelente",
			pt: "Véu Repelente"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to your Basic Team Rocket's Pokémon. (Existing effects are not removed. Damage is not an effect.)",
			fr: "Évitez tous les effets infligés à vos Pokémon de la Team Rocket de base provenant des attaques utilisées par les Pokémon de votre adversaire. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			de: "Verhindere alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die deinen Basis-Team-Rockets-Pokémon zugefügt werden. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)",
			it: "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti ai tuoi Pokémon del Team Rocket Base. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a tus Pokémon del Team Rocket Básicos. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados aos seus Pokémon da Equipe Rocket Básicos. (Efeitos existentes não são removidos e dano não é um efeito.)"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Dark Frost",
			fr: "Givre Sombre",
			de: "Dunkler Frost",
			it: "Oscurogelo",
			es: "Escarcha Oscura",
			pt: "Geada Sombria"
		},

		effect: {
			en: "If this Pokémon has any Team Rocket's Energy attached, this attack does 60 more damage.",
			fr: "Si au moins une Énergie de la Team Rocket est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 Team Rockets Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie del Team Rocket assegnate, questo attacco infligge 60 danni in più.",
			es: "Si este Pokémon tiene alguna Energía del Team Rocket unida, este ataque hace 60 puntos de daño más.",
			pt: "Se este Pokémon tiver alguma Energia da Equipe Rocket ligada a ele, este ataque causará 60 pontos de dano a mais."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card