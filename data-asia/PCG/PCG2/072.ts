import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Sharpedo ex",
         ja: "Sharpedo ex",
         fr: "SharpEdo ex",
         de: "Sharpedo ex",
         es: "Sharpedo ex",
         it: "Sharpedo Ex",
         pt: "Sharpede ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [319],
      hp: 100,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may switch 1 of your opponent's Benched Pokemon with the Defending Pokemon. If you do, this attack does 20 damage to the new Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンを防御するポケモンと交換することができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez changer 1 des Pokémon bancés de votre adversaire avec le Pokémon en défense. Si vous le faites, cette attaque fait 20 dégâts au nouveau Pokémon défendant. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 des Pokémon Ihres Gegners mit dem verteidigenden Pokémon umschalten. Wenn Sie dies tun, verursacht dieser Angriff 20 Schaden für das neue verteidigende Pokemon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede cambiar 1 de los Pokémon de banca de su oponente con el Pokémon defensor. Si lo haces, este ataque hace 20 daños al nuevo Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, è possibile cambiare 1 del Pokemon in panchina del tuo avversario con il Pokemon in carica. Se lo fai, questo attacco infligge 20 danni al nuovo Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode trocar 1 do Pokémon em bancada do seu oponente com o Pokémon atual. Se o fizer, esse ataque causa 20 danos ao novo Pokémon defensivo. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Darkness", "Colorless"],
          name: {
            en: "Darkness Blast",
            ja: "闇の爆発",
            fr: "Explosion de l'obscurité",
            de: "Dunkelheit Explosion",
            es: "Blast de oscuridad",
            it: "Oscurità",
            pt: "Escuridão explosão",
          },
          effect: {
            en: "You may discard a Darkness Energy attached to Sharpedo ex. If you do, this attack does 60 damage plus 20 more damage and discard 1 Energy card attached to the Defending Pokemon.",
            ja: "Sharpedo Exに取り付けられた闇のエネルギーを捨てることができます。そうした場合、この攻撃は60のダメージに加えて20のダメージを与え、防御ポケモンに1つのエネルギーカードを破棄します。",
            fr: "Vous pouvez jeter une énergie de l'obscurité attachée à Sharpedo Ex. Si vous le faites, cette attaque fait 60 dégâts plus 20 dégâts supplémentaires et jetez 1 carte d'énergie attachée au Pokémon en défense.",
            de: "Sie können eine Dunkelheitsenergie verwerfen, die an Sharpedo ex angebracht wird. Wenn Sie dies tun, verursacht dieser Angriff 60 Schäden plus 20 weitere Schäden und verwerfen 1 Energiekarte, die an das verteidigende Pokemon angebracht ist.",
            es: "Puede descartar una energía de oscuridad unida a Sharpedo Ex. Si lo hace, este ataque hace 60 daños más 20 más de daño y deseche 1 tarjeta de energía unida al Pokémon defensor.",
            it: "Puoi scartare un'energia oscurità attaccata a Sharpedo Ex. Se lo fai, questo attacco infligge 60 danni più 20 danni in più e scartare 1 carta di energia collegata al Pokemon in difesa.",
            pt: "Você pode descartar uma energia da escuridão ligada ao sharpede ex. Se o fizer, esse ataque causa 60 danos mais 20 mais danos e descarte 1 cartão de energia ligado ao Pokémon defensor.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
		  {
			  type: "holo",
			  stamp: ["1st edition"],
		  }
      ],
};
