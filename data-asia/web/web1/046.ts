import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Zapdos",
         ja: "ザプドス",
         fr: "Zapdos",
         de: "Zapdos",
         es: "Zapdos",
         it: "Zapdos",
         pt: "Zapdos",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [145],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Lightning Burn",
            ja: "稲妻の火傷",
            fr: "Brûlure de la foudre",
            de: "Blitzbrand",
            es: "Quemadura",
            it: "Fulmini brucia",
            pt: "Lightning Burn",
          },
          effect: {
            en: "Flip a coin. If heads, and if your opponent has any Benched Pokemon, choose 1 of them. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) If tails, Zapdos does 30 damage to itself.",
            ja: "コインをひっくり返します。ヘッドの場合、そして相手がベンチポケモンを持っている場合は、それらの1つを選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、ザプドスはそれ自体に30のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, et si votre adversaire a un pokemon banc, choisissez 1 d'entre eux. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Si les queues, Zapdos se font 30 dégâts.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben und wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Wenn Schwänze Zapdos für sich selbst beschädigen.",
            es: "Voltea una moneda. Si se dirige, y si tu oponente tiene algún Pokémon de banca, elija 1 de ellos. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca). Si las colas, Zapdos hace 30 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa e se il tuo avversario ha dei Pokemon in panchina, scegli 1 di essi. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Se le code, Zapdos infliggono 30 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças e se o seu oponente tiver algum Pokémon em banco, escolha 1 delas. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon em bancada.) Se as caudas, Zapdos causam 30 danos a si mesmos.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
