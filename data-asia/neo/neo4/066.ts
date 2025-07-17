import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Gengar",
         ja: "ダークジェンガー",
         fr: "Gengar sombre",
         de: "Dunkler Gengar",
         es: "Gengar oscuro",
         it: "Gengar oscuro",
         pt: "Dark Gengar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Deep Sleep",
            ja: "深い眠り",
            fr: "Sommeil profond",
            de: "Tiefer Schlaf",
            es: "Sueño profundo",
            it: "Sonno profondo",
            pt: "Sono profundo",
          },
          effect: {
            en: "As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokmon that is Asleep at the end of each turn. If either of them is tails, that Pokmon is still Asleep. This power stops working while Dark Gengar is Asleep, Confused, or Paralyzed.",
            ja: "ダークジェンガーがプレイしている限り、プレーヤーは各ターンの終わりに眠っているポクモンのそれぞれに2コインをひっくり返します。どちらかが尾の場合、そのポクモンはまだ眠っています。ダークジェンガーが眠っている、混乱し、麻痺している間、このパワーは機能しなくなります。",
            fr: "Tant que n'importe quel Gengar sombre sont en jeu, un joueur retourne 2 pièces pour chacun de son pokmon qui dort à la fin de chaque tour. Si l'un ou l'autre est la queue, ce pokmon est toujours endormi. Ce pouvoir cesse de fonctionner pendant que Dark Gengar est endormi, confus ou paralysé.",
            de: "Solange ein dunkler Gengar im Spiel ist, flieht ein Spieler 2 Münzen für jedes seiner Pokmon, das am Ende jeder Runde schläft. Wenn einer von ihnen Schwänze ist, schläft dieses Pokmon noch. Diese Kraft hört auf, zu arbeiten, während dunkler Gengar schläft, verwirrt oder gelähmt ist.",
            es: "Mientras cualquier Gengar oscuro esté en juego, un jugador voltea 2 monedas para cada uno de sus Pokmon que está dormido al final de cada turno. Si alguna de ellas es Tails, ese Pokmon todavía está dormido. Este poder deja de funcionar mientras Dark Gengar está dormido, confundido o paralizado.",
            it: "Finché è in gioco qualsiasi Gengar oscuro, un giocatore lancia 2 monete per ciascuno dei suoi Pokmon che dorme alla fine di ogni turno. Se uno dei due è coda, quel Pokmon è ancora addormentato. Questo potere smette di funzionare mentre Dark Gengar dorme, confuso o paralizzato.",
            pt: "Enquanto qualquer Gengar Dark estiver em jogo, um jogador vira 2 moedas para cada um de seus Pokmon que está dormindo no final de cada turno. Se qualquer um deles é cauda, esse Pokmon ainda está dormindo. Esse poder para de funcionar enquanto Dark Gengar está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Pull In",
            ja: "引き込みます",
            fr: "S'arrêter",
            de: "Anziehen",
            es: "Atraer",
            it: "Tirare dentro",
            pt: "Puxe",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, you may choose 1 of them and switch it with the Defending Pokemon (before doing damage or other effects of this attack). Either way, the Defending Pokemon is now Asleep.",
            ja: "対戦相手がベンチポケモンを持っている場合、それらの1つを選択して、防御ポケモンに切り替えることができます（この攻撃の損傷またはその他の効果を行う前に）。いずれにせよ、ディフェンディングポケモンは今眠っています。",
            fr: "Si votre adversaire a des pokemon bancés, vous pouvez en choisir 1 et le changer avec le Pokémon en défense (avant de faire des dégâts ou d'autres effets de cette attaque). Quoi qu'il en soit, le Pokémon en défense est maintenant endormi.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, können Sie 1 davon auswählen und mit dem verteidigenden Pokemon (bevor Sie Schäden oder andere Auswirkungen dieses Angriffs verursachen) wechseln. In jedem Fall schläft das verteidigende Pokemon jetzt.",
            es: "Si tu oponente tiene algún Pokémon de banca, puedes elegir 1 de ellos y cambiarlo con el Pokémon defensor (antes de hacer daño u otros efectos de este ataque). De cualquier manera, el Pokémon defensor ahora está dormido.",
            it: "Se il tuo avversario ha un Pokemon in panchina, puoi sceglierne uno e cambiarlo con il Pokemon in difesa (prima di fare danni o altri effetti di questo attacco). Ad ogni modo, il Pokemon in difesa ora dorme.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, você poderá escolher 1 deles e trocá -lo com o Pokemon defensor (antes de causar danos ou outros efeitos desse ataque). De qualquer maneira, o Pokémon atual está dormindo agora.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
