import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		en: "Toedscruel ex",
		fr: "Terracruel-ex",
		es: "Toedscruel ex",
		it: "Toedscruel-ex",
		pt: "Toedscruel ex",
		de: "Tenterra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	evolveFrom: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		it: "Toedscool",
		pt: "Toedscool",
		de: "Tentagra"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective Mycelium",
			fr: "Protection Fongique",
			es: "Micelio Protector",
			it: "Micoprotezione",
			pt: "Micélio Protetor",
			de: "Schützendes Myzelium"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to all of your Pokémon that have Energy attached. (Existing effects are not removed. Damage is not an effect.)",
			fr: "Évitez tous les effets infligés à tous vos Pokémon auxquels de l'Énergie est attachée et provenant des attaques utilisées par les Pokémon de votre adversaire. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a cada uno de tus Pokémon que tenga alguna Energía unida. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			it: "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a todos os seus Pokémon que têm Energia ligada a eles. (Efeitos existentes não são removidos e dano não é um efeito.)",
			de: "Verhindere alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Colony Rush",
			fr: "Ruée Collective",
			es: "Colonia al Ataque",
			it: "Assalto della Colonia",
			pt: "Colônia Furiosa",
			de: "Kolonieansturm"
		},

		effect: {
			en: "This attack does 40 more damage for each of your Benched Pokémon that has any {G} Energy attached.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon de Banc auxquels au moins une Énergie {G} est attachée.",
			es: "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tenga alguna Energía {G} unida.",
			it: "Questo attacco infligge 40 danni in più per ogni Pokémon nella tua panchina che ha delle Energie {G} assegnate.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon no Banco que tem alguma Energia {G} ligada a ele.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, an das mindestens 1 {G}-Energie angelegt ist, 40 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 751531
	}
}

export default card