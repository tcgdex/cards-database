import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoking",
         ja: "ニドキング",
         fr: "Nidoking",
         de: "Nidoking",
         es: "Nidoking",
         it: "Nidoking",
         pt: "Nidoking",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Power Gene",
            ja: "パワー遺伝子",
            fr: "Gène de puissance",
            de: "Machtgen",
            es: "Gen de poder",
            it: "Gene di potere",
            pt: "Gene de poder",
          },
          effect: {
            en: "As long as Nidoking is in play, your attacks by Nidoran F, Nidorina, Nidoqueen, Nidoran M, and Nidorino do 10 more damage to the Defending PokÃ©mon.",
            ja: "Nidokingが機能している限り、Nidoran F、Nidorina、Nidoqueen、Nidoran M、およびNidorinoによる攻撃は、Pokã©Monにさらに10ダメージを与えます。",
            fr: "Tant que Nidoking est en jeu, vos attaques de Nidoran F, Nidorina, Nidocheen, Nidoran M et Nidorino font 10 dommages supplémentaires aux Pokã © en défense.",
            de: "Solange Nidoking im Spiel ist, verursachen Ihre Angriffe von Nidoran F, Nidorina, Nidoqueen, Nidoran M und Nidorino 10 weitere Schäden an der verteidigenden Pokémon.",
            es: "Mientras Nidoking esté en juego, tus ataques de Nidoran F, Nidorina, Nidoqueen, Nidoran M y Nidorino causan 10 daños más al Poké Mon defensor.",
            it: "Finché Nidoking è in gioco, i tuoi attacchi di Nidoran F, Nidorina, Nidoqueen, Nidoran M e Nidorino fanno altri 10 danni al Poké Mon in carica.",
            pt: "Enquanto Nidoking estiver em jogo, seus ataques de Nidoran F, Nidorina, NidoQueen, Nidoran M e Nidorino causam mais 10 danos ao defensor de Poké.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Earth Poison",
            ja: "地球毒",
            fr: "Poison terrestre",
            de: "Erdgift",
            es: "Veneno de la tierra",
            it: "Veleno terrestre",
            pt: "Veneno da terra",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, the Defending Pokemon is now Poisoned.",
            ja: "防衛ポケモンにダメージカウンターがすでにある場合、防御ポケモンは現在毒されています。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, le Pokémon en défense est maintenant empoisonné.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, el Pokémon defensor ahora está envenenado.",
            it: "Se il Pokemon in carica ha già contatori di danno, il Pokemon in carica è ora avvelenato.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, o Pokemon atual agora está envenenado.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Bound Crush",
            ja: "バウンドクラッシュ",
            fr: "Coup de cœur lié",
            de: "Gebundener Schwarm",
            es: "Atasco atado",
            it: "Cotta legata",
            pt: "Esmagamento ligado",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 60 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) Nidoking can't use Bound Crush during your next turn.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに60のダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Nidkingは、次のターン中にBound Crushを使用できません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 60 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Nidoking ne peut pas utiliser Bound Crush lors de votre prochain tour.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 60. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Nidoking kann während Ihrer nächsten Kurve nicht gebundene Schwarm verwenden.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 60 daños a ese Pokémon. (No aplique debilidad y resistencia para los Pokémon de banca). Nidoking no puede usar el Crush Bound durante su próximo turno.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 60 danni a quel Pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Nidoking non può usare una cotta legata durante il turno successivo.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 60 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon em bancada.) A Nidoking não pode usar a queda ligada durante o próximo turno.",
          },
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
