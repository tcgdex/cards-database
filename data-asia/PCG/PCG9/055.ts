import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoking (Delta Species)",
         ja: "ニドギング（デルタ種）",
         fr: "Nidoking (espèces delta)",
         de: "Nidoking (Delta -Arten)",
         es: "Nidoking (especie delta)",
         it: "Nidoking (Delta Species)",
         pt: "Nidoking (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 120,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Linear Attack",
            ja: "線形攻撃",
            fr: "Attaque linéaire",
            de: "Linearer Angriff",
            es: "Ataque lineal",
            it: "Attacco lineare",
            pt: "Ataque linear",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Dark Horn",
            ja: "暗い角",
            fr: "Corne sombre",
            de: "Dunkelhorn",
            es: "Bocina oscura",
            it: "Corno scuro",
            pt: "Huzina escura",
          },
          effect: {
            en: "You may discard a Basic Pokemon or Evolution card from your hand. If you do, choose 1 of your opponent's Benched Pokemon and do 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "基本的なポケモンまたはエボリューションカードを手から捨てることができます。もしそうなら、相手のベンチポケモンの1つを選択し、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez jeter une carte Pokémon ou Evolution de base de votre main. Si vous le faites, choisissez un des pokemon bancés de votre adversaire et faites 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können eine einfache Pokemon- oder Evolutionskarte von Ihrer Hand wegwerfen. Wenn Sie dies tun, wählen Sie 1 des Pokémon Ihres Gegners und richten Sie 20 Schäden an diesem Pokémon an. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede descartar un Pokémon básico o una tarjeta de evolución de su mano. Si lo hace, elija 1 de los pokemon de banca de su oponente y haga 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi scartare un Pokemon di base o una carta di evoluzione dalla tua mano. Se lo fai, scegli 1 del Pokemon in panchina del tuo avversario e fai 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode descartar um cartão de Pokemon ou evolução básico da sua mão. Se o fizer, escolha 1 dos Pokémon em banco do seu oponente e causar 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 60,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
