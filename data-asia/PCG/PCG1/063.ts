import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Marowak",
         ja: "マロワク",
         fr: "Marowak",
         de: "Marowak",
         es: "Marowak",
         it: "Marowak",
         pt: "Marowak",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [105],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
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
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Vengeance",
            ja: "復讐",
            fr: "Vengeance",
            de: "Rache",
            es: "Venganza",
            it: "Vendetta",
            pt: "Vingança",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Basic Pokemon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
            ja: "基本的なポケモンごとに30のダメージに加えて、廃棄パイル内の各進化カードに対してさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque Pokémon de base et chaque carte d'évolution de votre tas de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jedes Basis -Pokémon und jede Evolutionskarte in Ihrem Ablagerungsstapel. Auf diese Weise können Sie nicht mehr als 60 Schäden hinzufügen.",
            es: "Hace 30 daños más 10 daños más por cada Pokémon básico y cada tarjeta de evolución en su pila de descarte. No puede agregar más de 60 daños de esta manera.",
            it: "Fa 30 danni più 10 danni in più per ogni Pokemon di base e ogni carta di evoluzione nella pila di scarto. Non puoi aggiungere più di 60 danni in questo modo.",
            pt: "30 danos mais 10 mais danos para cada Pokémon básico e cada cartão de evolução na sua pilha de descarte. Você não pode adicionar mais de 60 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
