import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Rocky Fighting Energy",
		fr: "Énergie Fighting Rocheuse",
		es: "Energía Fighting Rocosa",
		'es-mx': "Energía Fighting Rocosa",
		de: "Steinharte Fighting-Energie",
		it: "Energia Fighting Rocciosa",
		pt: "Energia Fighting Rochosa"
	},

	rarity: "Rare",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {F} Energy.\nPrevent all effects of attacks used by your opponent's Pokémon done to the {F} Pokémon this card is attached to. (Existing effects are not removed. Damage is not an effect.)",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {F}.\nÉvitez tous les effets provenant des attaques utilisées par les Pokémon de votre adversaire infligés au Pokémon {F} auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {F}.\nSe evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos al Pokémon {F} al que esté unida esta carta. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {F}.\nSe evitan todos los efectos de los ataques usados por los Pokémon de tu rival infligidos al Pokémon {F} al que esté unida esta carta. (Los efectos existentes no se eliminan. El daño no es un efecto).",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {F}-Energie.\nVerhindere alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die dem {F}-Pokémon zugefügt werden, an das diese Karte angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {F}.\nPrevieni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti al Pokémon {F} a cui è assegnata questa carta. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {F}.\nPrevina todos os efeitos de ataques usados pelos Pokémon do seu oponente causados ao Pokémon {F} ao qual esta carta está ligada. (Efeitos existentes não são removidos e dano não é um efeito.)"
	},

	energyType: "Normal",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684350,
		cardmarket: 877504
	}
}

export default card
